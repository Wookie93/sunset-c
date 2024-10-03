import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NavigationProvider } from "@/providers/navigation-provider";
import { ReactNode } from "react";
import { Body } from "@/components/Body";
import { MobileMenu } from "@/components/MobileMenu";
import client from "@/lib/contentful";
import { GlobalInterface } from "@/types/contefulTypes";
import { GET_GLOBAL_DATA } from "@/lib/queries/general-queries";

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

async function getGlobalContent() {
	const data = await client.request<GlobalInterface>(GET_GLOBAL_DATA);
	return data
  }

export default async function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	const {header, navigation, footer} = await getGlobalContent();


	return (
		<html lang="en">
			<NavigationProvider>
				<Body>
					<Header headerData={header} navigationLinks={navigation.menuItemCollection.items} />
					<MobileMenu navigationLinks={navigation.menuItemCollection.items} />
					<main>{children}</main>
					<Footer footerData={footer}/>
				</Body>
			</NavigationProvider>
		</html>
	);
}
