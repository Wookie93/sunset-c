import dynamic from 'next/dynamic';
import { Baner } from "@/components/Baner";
import React from "react";
import { CallToAction } from "@/features/call-to-action";
import { NeighborhoodResponse } from "@/types/contefulTypes";
import { GET_Neighborhood } from "@/lib/queries/hood-queries";
import { fetchData, groupByTypename } from "@/lib/utils";
import Head from "next/head";
import { ContentSection } from '@/components/ContentSection';

const Map = dynamic(() => import('@/features/map/index'), { ssr: false });


const NeighborhoodPage = async () => {

	const {metaTitle, metaDescription, modulesCollection} = await fetchData<NeighborhoodResponse>(GET_Neighborhood);;
	const {SecondaryHero, ContentSection:ContentSectionModuke, Cta} = groupByTypename(modulesCollection.items);

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
			/>}

			{ContentSectionModuke&&ContentSectionModuke.map((section:any) => (
				<ContentSection data={section} key={section.sys.id} />
			))}


			<Map />

			{Cta&&<CallToAction data={Cta[0]} />}
		</>
	);
};

export default NeighborhoodPage;
