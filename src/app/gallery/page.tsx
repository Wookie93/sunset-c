import { ContactSection } from "@/features/contact-section";
import NextImage from "next/image";
import React from "react";
import { Baner } from "@/components/Baner";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { Description } from "@/components/Description";
import { ButtonLink } from "@/components/ButtonLink";
import client from "@/lib/contentful";
import { GalleryResponse } from "@/types/contefulTypes";
import { GET_GALLERY } from "@/lib/queries/gallery-queries";
import { groupByTypename } from "@/lib/utils";
import Head from "next/head";

async function getGalleryContent() {
	try{
		const data = await client.request<GalleryResponse>(GET_GALLERY, {
			slug: '/galeria'
		  });
		  return data.galleryCollection.items[0]
	} catch(error){
		console.error('Error generating static params:', error);
		return [];
	}
  }

const GalleryPage = async () => {

	const {metaTitle ='Sunset house', metaDescription ='Sunset house', modulesCollection = []} = await getGalleryContent();
	const {SecondaryHero, ContentSection, ContactSection: ContactSectionModule} = groupByTypename(modulesCollection.items);
	await getGalleryContent();
	return (
		<>
			<Head>
        		<title>{metaTitle}</title>
        		<meta name="description" content={metaDescription} />
      		</Head>
			{SecondaryHero && <Baner
				title={SecondaryHero[0].title}
				description={SecondaryHero[0].description}
				image={SecondaryHero[0].image}
			/>}

			<Section className="container mx-auto space-y-10 laptop:!pb-0">
				{ContentSection && ContentSection.map((el:any) => (
					<div
						key={el.sys.id}
						className="grid grid-cols-12 gap-y-4 rounded-2xl border border-gray-100 p-4 laptop:p-10"
					>
						<div className="order-2 col-span-12 flex flex-col justify-between gap-y-4 tablet:order-1 tablet:col-span-4">
							<div className="space-y-4 laptop:space-y-7">
								<SectionTitle level={3}>{el.title}</SectionTitle>
								{el.contentCollection.items.map((para:any, index:number) => (
									<Description key={index} className="text-gray-600">
										{para.description}
									</Description>
								))}
							</div>
							<ButtonLink type="bordered" href={`${el.linkTo.slug}`}>
								Zobacz więcej
							</ButtonLink>
						</div>
						<div className="relative order-1 col-span-12 min-h-[15.188rem] tablet:order-2 tablet:col-span-4 tablet:col-start-9">
							<NextImage
								src={el.image.url}
								alt={el.image.title}
								fill
								className="object-cover"
							/>
						</div>
					</div>
				))}
			</Section>
			{ContactSectionModule && <ContactSection data={ContactSectionModule[0]} />}
		</>
	);
};

export default GalleryPage;
