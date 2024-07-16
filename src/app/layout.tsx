import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NavigationProvider } from "@/providers/navigation-provider";
import { ReactNode } from "react";
import { Body } from "@/components/Body";
import { MobileMenu } from "@/components/MobileMenu";

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
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<NavigationProvider>
				<Body>
					<Header />
					<MobileMenu />
					<main>{children}</main>
					<Footer />
				</Body>
			</NavigationProvider>
		</html>
	);
}
