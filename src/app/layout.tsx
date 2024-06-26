import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { clsx } from "clsx";
import { Header } from "@/components/Header";

const proximanova = localFont({
	variable: "--font-proximanova",
	display: "swap",
	style: "normal",
	src: [
		{
			path: "../assets/fonts/proximanova_light.woff2",
			weight: "300",
		},
		{
			path: "../assets/fonts/proximanova_regular.woff2",
			weight: "400",
		},
		{
			path: "../assets/fonts/proximanova_semibold.woff2",
			weight: "600",
		},
		{
			path: "../assets/fonts/proximanova_bold.woff2",
			weight: "700",
		},
	],
});

export const metadata: Metadata = {
	title: "Domek w górach na wynajem - komfortowy wypoczynek w sercu natury",
	description:
		"Zarezerwuj domek w górach na wynajem! Oferujemy komfortowy wypoczynek, malownicze widoki, liczne atrakcje i pełne wyposażenie. Idealne miejsce na rodzinne wakacje. Sprawdź dostępność!",
	openGraph: {
		title: "Domek w górach na wynajem - komfortowy wypoczynek w sercu natury",
		description:
			"Zarezerwuj domek w górach na wynajem! Oferujemy komfortowy wypoczynek, malownicze widoki, liczne atrakcje i pełne wyposażenie. Idealne miejsce na rodzinne wakacje. Sprawdź dostępność!",
		url: "https://sunset-house.vercel.app",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={clsx(proximanova.variable, "font-serif antialiased")}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
