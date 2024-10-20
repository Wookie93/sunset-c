import Head from 'next/head';
import { Baner } from "@/components/Baner";
import React from "react";
import { SectionTitle } from "@/components/SectionTitle";
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

import { AboutResponse } from "@/types/contefulTypes";
import { GET_ABOUT_US } from "@/lib/queries/about-queries";
import { fetchData, groupByTypename } from "@/lib/utils";
import { ContentSection } from '@/components/ContentSection';

const AboutPage = async () => {

	const {metaTitle, metaDescription, modulesCollection}  = await fetchData<AboutResponse>(GET_ABOUT_US);
	const {SecondaryHero, ContentSection: ContentSectionData, InfoSection, HomeFeatures, GallerySlider, Cta, ContactSection: ContactSectionModule} = groupByTypename(modulesCollection.items)


	return (
		<>
		    <Head>
        		<title>{metaTitle}</title>
        		<meta name="description" content={metaDescription} />
      		</Head>

			{SecondaryHero	&& <Baner
				title={SecondaryHero[0].title}
				description={SecondaryHero[0].description}
				image={SecondaryHero[0].image}
			/>}

			{ContentSectionData && ContentSectionData.map((section: any) => (
				<ContentSection data={section} key={section.sys.id} />
			))}


			{InfoSection &&	<div className="bg-gray-100 py-9">
				<div className="container mx-auto grid grid-cols-12 gap-6">
					<div className="col-span-6 laptop:col-span-3">
						<NextLink href={InfoSection[0].infoLinksCollection.items[0]?.url || '/'} className="flex flex-row items-center space-x-2">
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
			</div>}

			{HomeFeatures && <Section className="container mx-auto">
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
			</Section>}

			{HomeFeatures&&<Section className="bg-gray-100 max-tablet:pb-0">
				<div className="mb-[3.125rem] flex justify-center laptop:mb-20">
					<SectionTitle level={3}>{GallerySlider[0].title}</SectionTitle>
				</div>
				<HouseGallery data={GallerySlider[0].imagesCollection.items}/>
			</Section>
}
			{Cta&&<CallToAction data={Cta[0]}/>}

			{ContactSectionModule&&<ContactSection data={ContactSectionModule[0]} />}
		</>
	);
};

export default AboutPage;
