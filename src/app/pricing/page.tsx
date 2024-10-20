import React from "react";
import { Baner } from "@/components/Baner";
import { ContactSection } from "@/features/contact-section";
import { CallToAction } from "@/features/call-to-action";
import { Section } from "@/components/Section";
import { Pricing } from "@/features/pricing";
import { PricingPageResponse } from "@/types/contefulTypes";
import { GET_PRICES } from "@/lib/queries/pricing-queries";
import { fetchData, groupByTypename } from "@/lib/utils";
import Head from "next/head";



const PricingPage = async () => {

	const {metaTitle, metaDescription, modulesCollection} = await fetchData<PricingPageResponse>(GET_PRICES);
	const result = groupByTypename(modulesCollection.items);
	const {SecondaryHero, Paragraph, Pricing: PricingModule, Cta, ContactSection: ContactSectionModule} = result

	return (
		<>
			<Head>
        		<title>{metaTitle}</title>
        		<meta name="description" content={metaDescription} />
      		</Head>
			{SecondaryHero&&<Baner
				title={SecondaryHero[0].title}
				description={SecondaryHero[0].description}
				image={SecondaryHero[0].image}
			/>
}
			{PricingModule&&<Section className="overflow-hidden">
				<div className="container mx-auto">
					<Pricing description={Paragraph[0]} pricingData={PricingModule} />
				</div>
			</Section>}

			{Cta&&<CallToAction data={Cta[0]} />}

			{ContactSectionModule&&<ContactSection data={ContactSectionModule[0]} />}
		</>
	);
};

export default PricingPage;
