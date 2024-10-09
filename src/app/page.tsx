import { Hero } from "@/features/homepage";
import NextImage from "next/image";
import {
	IconCalendarCheck,
	IconHeadset,
	IconHomeHeart,
	IconMessageDots,
	IconSquareKey,
} from "@tabler/icons-react";
import { Description } from "@/components/Description";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { Title } from "@/components/Title";
import { ButtonLink } from "@/components/ButtonLink";
import { CallToAction } from "@/features/call-to-action";
import { ContactSection } from "@/features/contact-section";
import client from '@/lib/contentful';
import { GET_HOMEPAGE } from "@/lib/queries/hompage-queries";
import { HomepageResponse } from "@/types/contefulTypes";
import { VideoWrapper } from "@/components/VideoWrapper";

async function getHomepageContent() {
	const data = await client.request<HomepageResponse>(GET_HOMEPAGE);
	return data.homepage
  }

export default async function Home() {

	const {heroBaner, contentSectionCollection, cta, contactSection} = await getHomepageContent();


	return (
		<>
			<Hero data={heroBaner} />

			<Section className="mx-auto tablet:container max-tablet:pb-0">
				<div className="grid tabletLg:grid-cols-12">
					<div className="content-center space-y-6 px-5 tabletLg:col-span-5 tabletLg:col-start-1 tabletLg:space-y-12 tabletLg:px-0">
						<SectionTitle level={3}>
							{contentSectionCollection.items[0].title}
						</SectionTitle>
						<div className="flex max-w-[28.125rem] flex-row space-x-6">
							<IconHomeHeart size={45} className="text-main-gold" stroke={2} />
							<div className="flex flex-col space-y-2">
								<Title>{contentSectionCollection.items[0].contentCollection.items[0].title}</Title>
								<Description className="text-gray-600">
									{contentSectionCollection.items[0].contentCollection.items[0].description}
								</Description>
							</div>
						</div>
						<div className="flex max-w-[28.125rem] flex-row space-x-6">
							<IconHeadset size={45} className="text-main-gold" stroke={2} />
							<div className="flex flex-col space-y-2">
								<Title>{contentSectionCollection.items[0].contentCollection.items[1].title}</Title>
								<Description className="text-gray-600">
									{contentSectionCollection.items[0].contentCollection.items[1].description}
								</Description>
							</div>
						</div>
					</div>
					<div className="col-span-1 pt-[3.125rem] tabletLg:col-span-7 tabletLg:col-start-7 tabletLg:pt-0">
						<div className="relative h-lvh max-h-[21.875rem] laptop:max-h-[32.75rem]">
							<NextImage
								fill
								src={contentSectionCollection.items[0].image.url}
								alt={contentSectionCollection.items[0].image.title}
								sizes="27.033vw"
							/>
						</div>
					</div>
				</div>
			</Section>


			<Section className="bg-gray-100">
				<div className="container mx-auto">
					<div className="mb-12 flex justify-center laptop:mb-20">
						<SectionTitle level={3} className="max-w-[21.875rem] text-center">
							{contentSectionCollection.items[1].title}
						</SectionTitle>
					</div>
					<div className="grid grid-cols-1 tabletLg:grid-cols-3 tabletLg:space-x-10">
						<div className="space-y-6 p-6">
							<IconCalendarCheck
								size={45}
								className="text-main-gold"
								stroke={2}
							/>
							<div className="space-y-2">
								<Title>{contentSectionCollection.items[1].contentCollection.items[0].title}</Title>
								<Description className="text-gray-600">
									{contentSectionCollection.items[1].contentCollection.items[0].description}
								</Description>
							</div>
						</div>

						<div className="space-y-6 p-6">
							<IconMessageDots
								size={45}
								className="text-main-gold"
								stroke={2}
							/>
							<div className="space-y-2">
								<Title>
									{contentSectionCollection.items[1].contentCollection.items[1].title}
								</Title>
								<Description className="text-gray-600">
									{contentSectionCollection.items[1].contentCollection.items[1].description}
								</Description>
							</div>
						</div>

						<div className="space-y-6 p-6">
							<IconSquareKey size={45} className="text-main-gold" stroke={2} />
							<div className="space-y-2">
								<Title>
									{contentSectionCollection.items[1].contentCollection.items[2].title}
								</Title>
								<Description className="text-gray-600">
									{contentSectionCollection.items[1].contentCollection.items[2].description}
								</Description>
							</div>
						</div>
					</div>
					<div className="mt-10 flex flex-col items-center justify-center max-tablet:space-y-4 tablet:flex-row tablet:space-x-6">
						<ButtonLink type="bordered" href={contentSectionCollection.items[1].buttonsSectionCollection.items[0].linkTo.slug}>
							{contentSectionCollection.items[1].buttonsSectionCollection.items[0].textOnButton}
						</ButtonLink>
						<ButtonLink type="primary" href={contentSectionCollection.items[1].buttonsSectionCollection.items[1].linkTo.slug}>
							{contentSectionCollection.items[1].buttonsSectionCollection.items[1].textOnButton}
						</ButtonLink>
					</div>
				</div>
			</Section>

			<Section className="mx-auto grid items-center tablet:container max-tablet:pb-0 tabletLg:grid-cols-12">
				{contentSectionCollection.items[2].image.url.includes('videos') ? 
				<VideoWrapper />
				: <div className="col-span-1 max-tabletLg:order-2 max-tabletLg:pt-[3.125rem] tabletLg:col-span-6">
					<div className="relative flex h-lvh max-h-[24.375rem] items-center justify-center bg-gray-800 laptop:max-h-[32.75rem]">
						<NextImage
						fill
						src={contentSectionCollection.items[2].image.url}
						alt={contentSectionCollection.items[2].image.title}
						sizes="27.033vw"
						className="opacity-30 mix-blend-hard-light"
					/>
					</div>
				</div>
				}
				<div className="col-span-1 space-y-12 max-tabletLg:order-1 max-tabletLg:px-5 tabletLg:col-span-5 tabletLg:col-start-8">
					<SectionTitle level={3}>
						{contentSectionCollection.items[2].title}
					</SectionTitle>
					<div className="space-y-10">
						<Description className="text-gray-600">
							{contentSectionCollection.items[2].contentCollection.items[0].description}
						</Description>
						<div>
							<Title>
								{contentSectionCollection.items[2].contentCollection.items[1].title}
							</Title>
							<Description className="text-gray-600">
								{contentSectionCollection.items[2].contentCollection.items[1].description}
							</Description>
						</div>
						<div>
							<Title>
								{contentSectionCollection.items[2].contentCollection.items[2].title}
							</Title>
							<Description className="text-gray-600">
								{contentSectionCollection.items[2].contentCollection.items[2].description}
							</Description>
						</div>
					</div>
				</div>
			</Section>

			<CallToAction data={cta} />

			<Section className="container mx-auto !pb-0">
				<div className="space-y-2">
					<SectionTitle
						level={3}
						className="after:bottom-1.5 after:top-auto after:max-w-32"
					>
						{contentSectionCollection.items[3].title}
					</SectionTitle>
					<Description className="text-gray-600">
						{contentSectionCollection.items[3].contentCollection.items[0].description}
					</Description>
				</div>
				<div className="mt-16 grid grid-cols-1 gap-10 tabletLg:grid-cols-2">
					<div className="space-y-4">
						<div className="relative h-lvh max-h-[13.75rem] overflow-hidden laptop:max-h-[18.75rem]">
							<NextImage
								src={contentSectionCollection.items[3].contentCollection.items[1].image.url}
								alt={contentSectionCollection.items[3].contentCollection.items[1].image.title}
								fill
								sizes="22.004vw"
							/>
						</div>
						<Title>{contentSectionCollection.items[3].contentCollection.items[1].title}</Title>
						<Description className="text-gray-600">
							{contentSectionCollection.items[3].contentCollection.items[1].description}
						</Description>
					</div>
					<div className="space-y-4">
						<div className="relative h-lvh max-h-[13.75rem] overflow-hidden laptop:max-h-[18.75rem]">
							<NextImage
								src={contentSectionCollection.items[3].contentCollection.items[2].image.url}
								alt={contentSectionCollection.items[3].contentCollection.items[2].image.title}
								fill
								sizes="22.004vw"
							/>
						</div>
						<Title>{contentSectionCollection.items[3].contentCollection.items[2].title}</Title>
						<Description className="text-gray-600">
							{contentSectionCollection.items[3].contentCollection.items[2].description}
						</Description>
					</div>
				</div>
			</Section>

			<ContactSection data={contactSection} />
		</>
	);
}
