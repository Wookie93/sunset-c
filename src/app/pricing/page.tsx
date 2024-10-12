import React from "react";
import { Baner } from "@/components/Baner";
import { ContactSection } from "@/features/contact-section";
import { CallToAction } from "@/features/call-to-action";
import { Section } from "@/components/Section";
import { Pricing } from "@/features/pricing";
import client from "@/lib/contentful";
import { PricingPageResponse } from "@/types/contefulTypes";
import { GET_PRICES } from "@/lib/queries/pricing-queries";
import { groupByTypename } from "@/lib/utils";
import Head from "next/head";


async function getPricingContent() {
	const data = await client.request<PricingPageResponse>(GET_PRICES);
	return data.page
  }


const PricingPage = async () => {

	const {metaTitle, metaDescription, modulesCollection} = await getPricingContent()
	const result = groupByTypename(modulesCollection.items);
	const {SecondaryHero, Paragraph, Pricing: PricingModule, Cta, ContactSection: ContactSectionModule} = result

	return (
		<>
			<Head>
        		<title>{metaTitle}</title>
        		<meta name="description" content={metaDescription} />
      		</Head>
			<Baner
				title={SecondaryHero[0].title}
				description={SecondaryHero[0].description}
				image={SecondaryHero[0].image}
			/>

			<Section className="overflow-hidden">
				<div className="container mx-auto">
					<Pricing description={Paragraph[0]} pricingData={PricingModule} />
				</div>
			</Section>

			<CallToAction data={Cta[0]} />

			<ContactSection data={ContactSectionModule[0]} />
		</>
	);
};

export default PricingPage;
