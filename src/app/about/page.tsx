import Head from 'next/head';
import { Baner } from "@/components/Baner";
import React from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { Description } from "@/components/Description";
import NextImage from "next/image";
import { Section } from "@/components/Section";
import {
	IconBath,
	IconBed,
	IconBookmarkEdit,
	IconCarGarage,
	IconFlame,
	IconHomeCog,
	IconMap2, IconMonkeybar,
	IconShieldChevron,
	IconTags, IconToolsKitchen2,
	IconUsers,
	IconWifi,
} from "@tabler/icons-react";
import NextLink from "next/link";
import { FeatureFacilitie } from "@/components/FeatureFacilitie";
import { HouseGallery } from "@/features/gallery";
import { CallToAction } from "@/features/call-to-action";
import { ContactSection } from "@/features/contact-section";
import client from '@/lib/contentful';

import { AboutResponse } from "@/types/contefulTypes";
import { GET_ABOUT_US } from "@/lib/queries/about-queries";
import { groupByTypename } from "@/lib/utils";

async function getAboutContent() {
	const data = await client.request<AboutResponse>(GET_ABOUT_US);
	return data.page
}


const AboutPage = async () => {

	const {metaTitle, metaDescription, modulesCollection}  = await getAboutContent();
	const {SecondaryHero, ContentSection, InfoSection, HomeFeatures, GallerySlider, Cta, ContactSection: ContactSectionModule} = groupByTypename(modulesCollection.items)


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

			<Section className="container mx-auto">
				<div className="grid tabletLg:grid-cols-12">
					<div className="order-2 col-span-1 pt-[3.125rem] tabletLg:order-1 tabletLg:col-span-6 tabletLg:col-start-1 tabletLg:pt-0">
						<div className="relative h-lvh max-h-[21.875rem] laptop:max-h-[31.25rem]">
							<NextImage
								fill
								src={ContentSection[0].image.url}
								alt={ContentSection[0].image.title}
								sizes="27.033vw"
								className="object-cover"
							/>
						</div>
					</div>
					<div className="order-1 content-center space-y-6 px-5 tabletLg:order-2 tabletLg:col-span-5 tabletLg:col-start-8 tabletLg:px-0">
						<SectionTitle level={3}>{ContentSection[0].title}</SectionTitle>
						{ContentSection[0].contentCollection.items.map((item:any,index:number) => (
							<Description className="text-gray-600" key={index}>
								{item.description}
							</Description>
						))}

					</div>
				</div>
			</Section>

			<div className="bg-gray-100 py-9">
				<div className="container mx-auto grid grid-cols-12 gap-6">
					<div className="col-span-6 laptop:col-span-3">
						<NextLink href={InfoSection[0].infoLinksCollection.items[0].url || '/'} className="flex flex-row items-center space-x-2">
							<IconShieldChevron size={24} />
							<p className="text-base font-normal text-gray-900">
								{InfoSection[0].infoLinksCollection.items[0].title}
							</p>
						</NextLink>
					</div>
					<div className="col-span-6 laptop:col-span-3">
						<NextLink href={InfoSection[0].infoLinksCollection.items[1].url || '/'}  className="flex flex-row items-center space-x-2">
							<IconBookmarkEdit size={24} />
							<p className="text-base font-normal text-gray-900">
							{InfoSection[0].infoLinksCollection.items[1].title}
							</p>
						</NextLink>
					</div>
					<div className="col-span-6 laptop:col-span-3">
						<NextLink
							href={InfoSection[0].infoLinksCollection.items[2].url || '/'}
							className="flex flex-row items-center space-x-2"
						>
							<IconMap2 size={24} />
							<p className="text-base font-normal text-gray-900">
							{InfoSection[0].infoLinksCollection.items[2].title}
							</p>
						</NextLink>
					</div>
					<div className="col-span-6 laptop:col-span-3">
						<NextLink
							href={InfoSection[0].infoLinksCollection.items[3].url || '/'}
							className="flex flex-row items-center space-x-2"
						>
							<IconTags size={24} />
							<p className="text-base font-normal text-gray-900">
							{InfoSection[0].infoLinksCollection.items[3].title}
							</p>
						</NextLink>
					</div>
				</div>
			</div>

			<Section className="container mx-auto">
				<div className="flex justify-center">
					<SectionTitle level={3}>{HomeFeatures[0].title}</SectionTitle>
				</div>
				<div className="mt-[3.125rem] grid grid-cols-12 gap-y-6 laptop:mt-20 laptop:gap-16">
					<div className="col-span-12 tablet:col-span-6 laptop:col-span-4">
						<FeatureFacilitie
							icon={<IconHomeCog size={44} className="text-main-gold"/>}
							title={HomeFeatures[0].features[0]?.split(' - ')[0]} // "Powierzchnia domku"
							feature={HomeFeatures[0].features[0]?.split(' - ')[1]} // "75m2"
						/>
					</div>
					<div className="col-span-12 tablet:col-span-6 laptop:col-span-4">
						<FeatureFacilitie
							icon={<IconWifi size={44} className="text-main-gold"/>}
							title={HomeFeatures[0].features[1]?.split(' - ')[0]} // "Internet"
							feature={HomeFeatures[0].features[1]?.split(' - ')[1]} // "WiFi"
						/>
					</div>
					<div className="col-span-12 tablet:col-span-6 laptop:col-span-4">
						<FeatureFacilitie
							icon={<IconUsers size={44} className="text-main-gold"/>}
							title={HomeFeatures[0].features[2]?.split(' - ')[0]} // "Ilość miejsc"
							feature={HomeFeatures[0].features[2]?.split(' - ')[1]} // "6-8"
						/>
					</div>
					<div className="col-span-12 tablet:col-span-6 laptop:col-span-4">
						<FeatureFacilitie
							icon={<IconBed size={44} className="text-main-gold"/>}
							title={HomeFeatures[0].features[3]?.split(' - ')[0]} // "Łóżka"
							feature={HomeFeatures[0].features[3]?.split(' - ')[1]} // "Pojedyncze/Podwójne"
						/>
					</div>
					<div className="col-span-12 tablet:col-span-6 laptop:col-span-4">
						<FeatureFacilitie
							icon={<IconFlame size={44} className="text-main-gold"/>}
							title={HomeFeatures[0].features[4]?.split(' - ')[0]} // "Miejsce na"
							feature={HomeFeatures[0].features[4]?.split(' - ')[1]} // "Ognisko"
						/>
					</div>
					<div className="col-span-12 tablet:col-span-6 laptop:col-span-4">
						<FeatureFacilitie
							icon={<IconCarGarage size={44} className="text-main-gold"/>}
							title={HomeFeatures[0].features[5]?.split(' - ')[0]} // "Własny"
							feature={HomeFeatures[0].features[5]?.split(' - ')[1]} // "Parking"
						/>
					</div>
					<div className="col-span-12 tablet:col-span-6 laptop:col-span-4">
						<FeatureFacilitie
							icon={<IconBath size={44} className="text-main-gold"/>}
							title={HomeFeatures[0].features[6]?.split(' - ')[0]}
							feature={HomeFeatures[0].features[6]?.split(' - ')[1]}
						/>
					</div>
					<div className="col-span-12 tablet:col-span-6 laptop:col-span-4">
						<FeatureFacilitie
							icon={<IconMonkeybar size={44} className="text-main-gold"/>}
							title={HomeFeatures[0].features[7]?.split(' - ')[0]}
							feature={HomeFeatures[0].features[7]?.split(' - ')[1]}
						/>
					</div>
					<div className="col-span-12 tablet:col-span-6 laptop:col-span-4">
						<FeatureFacilitie
							icon={<IconToolsKitchen2 size={44} className="text-main-gold"/>}
							title={HomeFeatures[0].features[8]?.split(' - ')[0]}
							feature={HomeFeatures[0].features[8]?.split(' - ')[1]}
						/>
					</div>
				</div>
			</Section>

			<Section className="bg-gray-100 max-tablet:pb-0">
				<div className="mb-[3.125rem] flex justify-center laptop:mb-20">
					<SectionTitle level={3}>{GallerySlider[0].title}</SectionTitle>
				</div>
				<HouseGallery data={GallerySlider[0].imagesCollection.items}/>
			</Section>

			<CallToAction data={Cta[0]}/>

			<ContactSection data={ContactSectionModule[0]} />
		</>
	);
};

export default AboutPage;
