import { loadEnvConfig } from "@next/env";
import type { CodegenConfig } from "@graphql-codegen/cli";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
    overwrite: true,
    ignoreNoDocuments: true,
    schema: [
        {
            [`${process.env.NEXT_PUBLIC_API_URL}/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_ENV_ALIAS}`]: {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
                },
            },
        },
    ],
    documents: "src/graphql/*.graphql",
    generates: {
        "src/gql/": {
            preset: "client",
            plugins: [],
            presetConfig: {
                fragmentMasking: false,
            },
            config: {
                useTypeImports: true,
                enumsAsTypes: true,
                defaultScalarType: "unknown",
                skipTypename: true,
                documentMode: "string",
            },
        },
    },
};

export default config;
