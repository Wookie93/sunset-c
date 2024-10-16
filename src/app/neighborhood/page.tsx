import dynamic from 'next/dynamic';
import { Baner } from "@/components/Baner";
import React from "react";
import { CallToAction } from "@/features/call-to-action";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { Description } from "@/components/Description";
import NextImage from "next/image";
import client from "@/lib/contentful";
import { NeighborhoodResponse } from "@/types/contefulTypes";
import { GET_Neighborhood } from "@/lib/queries/hood-queries";
import { groupByTypename } from "@/lib/utils";
import Head from "next/head";

const Map = dynamic(() => import('@/features/map/index'), { ssr: false });

async function getNeighborhoodContent() {
	try {
	  const data = await client.request<NeighborhoodResponse>(GET_Neighborhood);
	  return data.page;
	} catch (error) {
	  console.error("Error fetching neighborhood content:", error);
	  return null;
	}
  }

const NeighborhoodPage = async () => {

	const {metaTitle, metaDescription, modulesCollection} = await getNeighborhoodContent();
	const {SecondaryHero, ContentSection, Cta} = groupByTypename(modulesCollection.items);

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

			{ContentSection.map((item:any, index:number) => (
				<Section key={index} className={`container mx-auto ${index % 2 == 0 ? '' : 'bg-gray-100'}`}>
					<div className="grid tabletLg:grid-cols-12">
						<div className={`${item.imageAtRight ? 'order-2 content-center space-y-6 px-5 tabletLg:order-1 tabletLg:col-span-5 tabletLg:col-start-1 tabletLg:px-0' 
							: 'order-2 content-center space-y-6 px-5 tabletLg:col-span-5 tabletLg:col-start-8 tabletLg:px-0'}`}>
							<SectionTitle level={3}>{item.title}</SectionTitle>
							<Description className="text-gray-600">
								{item.contentCollection.items.map((text:any) => (
									text.description
								))}
							</Description>
						</div>
						<div className={`${item.imageAtRight ? 'order-1 col-span-1 pb-[3.125rem] tabletLg:order-2 tabletLg:col-span-6 tabletLg:col-start-7 tabletLg:pb-0' 
							: 'order-1 col-span-1 pb-[3.125rem] tabletLg:col-span-6 tabletLg:col-start-1 tabletLg:pb-0'}`}>
							<div className="relative h-lvh max-h-[21.875rem] laptop:max-h-[40.625rem]">
								<NextImage
									fill
									src={item.image.url}
									alt={item.image.title}
									className="object-cover"
								/>
							</div>
						</div>
					</div>
				</Section>
			))}


			<Map />

			<CallToAction data={Cta[0]} />
		</>
	);
};

export default NeighborhoodPage;
