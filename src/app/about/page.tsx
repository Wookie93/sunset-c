import { Baner } from "@/components/Baner";
import React from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { Description } from "@/components/Description";
import NextImage from "next/image";
import { Section } from "@/components/Section";
import {
	IconBed,
	IconBookmarkEdit,
	IconCarGarage,
	IconFlame,
	IconHomeCog,
	IconMap2,
	IconShieldChevron,
	IconTags,
	IconUsers,
	IconWifi,
} from "@tabler/icons-react";
import NextLink from "next/link";
import { FeatureFacilitie } from "@/components/FeatureFacilitie";
import { HouseGallery } from "@/features/gallery";
import { CallToAction } from "@/features/call-to-action";
import { ContactSection } from "@/features/contact-section";

const AboutPage = () => {
	return (
		<>
			<Baner
				title="Sunset House"
				description="Ciesz się niezapomnianym pobytem w Sunset House. Nasz profesjonalny zespół zapewni Ci doskonałą obsługę, a liczne atrakcje turystyczne w okolicy umilą Twój pobyt."
			/>

			<Section className="container mx-auto">
				<div className="grid tabletLg:grid-cols-12">
					<div className="order-2 col-span-1 pt-[3.125rem] tabletLg:order-1 tabletLg:col-span-6 tabletLg:col-start-1 tabletLg:pt-0">
						<div className="relative h-lvh max-h-[21.875rem] laptop:max-h-[31.25rem]">
							<NextImage
								fill
								src="https://res.cloudinary.com/dstimijog/image/upload/v1722700189/about_icfry2.jpg"
								alt="Narty lub rower"
								sizes="27.033vw"
								className="object-cover"
							/>
						</div>
					</div>
					<div className="order-1 content-center space-y-6 px-5 tabletLg:order-2 tabletLg:col-span-5 tabletLg:col-start-8 tabletLg:px-0">
						<SectionTitle level={3}>Komfortowy domek Sunset House</SectionTitle>
						<Description className="text-gray-600">
							Domek na wynajem przewidziany został dla 6-8 osób i składa się z
							dwóch poziomów o łącznej powierzchni 75m2. Otwarty parter z
							aneksem kuchennym, salonem i łazienką, w której znajduje się
							prywatna sauna oraz piętro z dwiema sypialniami.
						</Description>
						<Description className="text-gray-600">
							Dodatkowo - przestronny balkon, spory taras i mnóstwo zielonej
							przestrzeni.
						</Description>
					</div>
				</div>
			</Section>

			<div className="bg-gray-100 py-9">
				<div className="container mx-auto grid grid-cols-12 gap-6">
					<div className="col-span-6 laptop:col-span-3">
						<NextLink href="/" className="flex flex-row items-center space-x-2">
							<IconShieldChevron size={24} />
							<p className="text-base font-normal text-gray-900">
								Regulamin obiektu
							</p>
						</NextLink>
					</div>
					<div className="col-span-6 laptop:col-span-3">
						<NextLink href="/" className="flex flex-row items-center space-x-2">
							<IconBookmarkEdit size={24} />
							<p className="text-base font-normal text-gray-900">
								Polityka prywatności
							</p>
						</NextLink>
					</div>
					<div className="col-span-6 laptop:col-span-3">
						<NextLink
							href="/contact"
							className="flex flex-row items-center space-x-2"
						>
							<IconMap2 size={24} />
							<p className="text-base font-normal text-gray-900">
								Jak dojechać?
							</p>
						</NextLink>
					</div>
					<div className="col-span-6 laptop:col-span-3">
						<NextLink
							href="/pricing"
							className="flex flex-row items-center space-x-2"
						>
							<IconTags size={24} />
							<p className="text-base font-normal text-gray-900">
								Cennik obiektu
							</p>
						</NextLink>
					</div>
				</div>
			</div>

			<Section className="container mx-auto">
				<div className="flex justify-center">
					<SectionTitle level={3}>Udogodnienia</SectionTitle>
				</div>
				<div className="mt-[3.125rem] grid grid-cols-12 gap-y-6 laptop:mt-20 laptop:gap-16">
					<div className="col-span-12 tablet:col-span-6 laptop:col-span-4">
						<FeatureFacilitie
							icon={<IconHomeCog size={44} className="text-main-gold" />}
							title="Powierzchnia domku"
							feature="75m2"
						/>
					</div>
					<div className="col-span-12 tablet:col-span-6 laptop:col-span-4">
						<FeatureFacilitie
							icon={<IconWifi size={44} className="text-main-gold" />}
							title="Internet"
							feature="WiFi"
						/>
					</div>
					<div className="col-span-12 tablet:col-span-6 laptop:col-span-4">
						<FeatureFacilitie
							icon={<IconUsers size={44} className="text-main-gold" />}
							title="Ilość miejsc"
							feature="6-8"
						/>
					</div>
					<div className="col-span-12 tablet:col-span-6 laptop:col-span-4">
						<FeatureFacilitie
							icon={<IconBed size={44} className="text-main-gold" />}
							title="Łóżka"
							feature="Pojedyncze/Podwójne"
						/>
					</div>
					<div className="col-span-12 tablet:col-span-6 laptop:col-span-4">
						<FeatureFacilitie
							icon={<IconFlame size={44} className="text-main-gold" />}
							title="Miejsce na"
							feature="Ognisko"
						/>
					</div>
					<div className="col-span-12 tablet:col-span-6 laptop:col-span-4">
						<FeatureFacilitie
							icon={<IconCarGarage size={44} className="text-main-gold" />}
							title="Miejsce"
							feature="Parkingowe"
						/>
					</div>
				</div>
			</Section>

			<Section className="bg-gray-100 max-tablet:pb-0">
				<div className="mb-[3.125rem] flex justify-center laptop:mb-20">
					<SectionTitle level={3}>Galeria domku</SectionTitle>
				</div>
				<HouseGallery />
			</Section>

			<CallToAction
				buttonHref="/"
				title="Zarezerwuj pobyt w Sunset House"
				description="Odkryj urok Poreby Wielkiej i zatrzymaj się w naszym urokliwym domku letniskowym."
				buttonText="Zarezerwuj teraz"
			/>

			<ContactSection />
		</>
	);
};

export default AboutPage;
