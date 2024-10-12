FROM node:18-alpine AS base

FROM base AS builder

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
  fi

ARG CONTENTFUL_API_URL
ENV CONTENTFUL_API_URL ${CONTENTFUL_API_URL}
ARG CONTENTFUL_ACCESS_TOKEN
ENV CONTENTFUL_ACCESS_TOKEN ${CONTENTFUL_ACCESS_TOKEN}
ARG CONTENTFUL_SPACE_ID
ENV CONTENTFUL_SPACE_ID ${CONTENTFUL_SPACE_ID}
ARG CONTENTFUL_REVALIDATE_SECRET
ENV CONTENTFUL_REVALIDATE_SECRET ${CONTENTFUL_REVALIDATE_SECRET}

COPY src ./src
COPY public ./public
COPY next.config.js .
COPY tsconfig.json .
COPY postcss.config.mjs .
COPY tailwind.config.ts .

RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then pnpm build; \
  else yarn build; \
  fi

FROM base AS runner

WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

ENV HOSTNAME '0.0.0.0'
ENV PORT 5000

EXPOSE 5000

CMD ["node", "server.js"]
