import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./features/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				desktop: "1280px",
				"2xl": "1440px",
			},
		},
		screens: {
			tablet: "601px",
			tabletLg: "768px",
			laptop: "1024px",
			desktop: "1280px",
			xl: "1366px",
			"2xl": "1440px",
			"3xl": "1536px",
			"4xl": "1920px",
		},
		extend: {
			typography: (theme: (arg0: string) => any) => ({
				DEFAULT: {
					css: {
						maxWidth: "100ch",
						color: theme("colors.secondary.DEFAULT"),
						"--tw-prose-body": theme("colors.secondary.DEFAULT"),
						"--tw-prose-headings": theme("colors.secondary.DEFAULT"),
						"--tw-prose-links": theme("colors.secondary.DEFAULT"),
						a: {
							fontWeight: 600,
						},
					},
				},
			}),
			fontFamily: {
				serif: ["var(--font-proximanova)"],
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				gray: {
					100: "hsl(var(--gray-100))",
					200: "hsl(var(--gray-200))",
					300: "hsl(var(--gray-300))",
					400: "hsl(var(--gray-400))",
					500: "hsl(var(--gray-500))",
					600: "hsl(var(--gray-600))",
					700: "hsl(var(--gray-700))",
					800: "hsl(var(--gray-800))",
					900: "hsl(var(--gray-900))",
				},
				main: {
					gold: "hsl(var(--main-gold))",
				},
				pink: "hsl(var(--pink))",
				lion: "hsl(var(--lion))",
				dun: "hsl(var(--dun))",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
