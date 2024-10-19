import { Hero } from "@/features/homepage";
import { CallToAction } from "@/features/call-to-action";
import { ContactSection } from "@/features/contact-section";
import client from '@/lib/contentful';
import { GET_HOMEPAGE } from "@/lib/queries/hompage-queries";
import { HomepageResponse } from "@/types/contefulTypes";

import { ContentSection } from "@/components/ContentSection";
import { OurTeamSection } from "@/components/OurTeamSection";

async function getHomepageContent() {
	const data = await client.request<HomepageResponse>(GET_HOMEPAGE);
	return data.homepage
  }

export default async function Home() {

	const {heroBaner, contentSectionCollection, cta, contactSection, team} = await getHomepageContent();

	return (
		<>
			<Hero data={heroBaner} />
			{contentSectionCollection && contentSectionCollection.items.map((section: any) => (
				<ContentSection data={section} key={section.sys.id} />
			))}
			{cta &&  <CallToAction data={cta} />}
			{team &&  <OurTeamSection data={team} /> }
			{contactSection &&  <ContactSection data={contactSection} />}
		</>
	);
}
