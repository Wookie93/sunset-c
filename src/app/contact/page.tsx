import dynamic from 'next/dynamic';
import { Baner } from "@/components/Baner";
import React from "react";
import { Section } from "@/components/Section";
import {
	IconDeviceMobileVibration,
	IconMail,
	IconMapPinDown,
} from "@tabler/icons-react";
import { Title } from "@/components/Title";
import { Description } from "@/components/Description";
import NextImage from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { SectionTitle } from "@/components/SectionTitle";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import client from "@/lib/contentful";
import { ContactPageResponse } from "@/types/contefulTypes";
import { GET_CONTACT_PAGE } from "@/lib/queries/contact-queries";
import { groupByTypename } from "@/lib/utils";
import Head from "next/head";

const Map = dynamic(() => import('@/features/map/index'), { ssr: false });


async function getContactPageContent() {
	const data = await client.request<ContactPageResponse>(GET_CONTACT_PAGE);
	return data.page
  }

const ContactPage = async () => {

	const {metaTitle, metaDescription, modulesCollection} = await getContactPageContent()
	const result = groupByTypename(modulesCollection.items);
	const {SecondaryHero, ContactSection, FaqModule} = result;

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
				<div className="grid grid-cols-12">
					<div className="col-span-12 space-y-10 tabletLg:col-span-5">
						<div className="space-y-4">
							<IconMail size={32} className="text-gray-900" />
							<div className="space-y-2">
								<Title className="!text-gray-900">{ContactSection[0].contactDataCollection.items[0].title}</Title>
								<Description className="text-gray-700">
								{ContactSection[0].contactDataCollection.items[0].subtitle}
								</Description>
								<a
									href={`mailto:${ContactSection[0].contactDataCollection.items[0].linkText}`}
									className="block text-base font-normal text-lion underline"
								>
									{ContactSection[0].contactDataCollection.items[0].linkText}
								</a>
							</div>
						</div>

						<div className="space-y-4">
							<IconDeviceMobileVibration size={32} className="text-gray-900" />
							<div className="space-y-2">
								<Title className="!text-gray-900">{ContactSection[0].contactDataCollection.items[1].title}</Title>
								<Description className="text-gray-700">
								{ContactSection[0].contactDataCollection.items[1].subtitle}
								</Description>
								<a
									href={`mailto:${ContactSection[0].contactDataCollection.items[1].linkText}`}
									className="block text-base font-normal text-lion underline"
								>
									{ContactSection[0].contactDataCollection.items[1].linkText}
								</a>
							</div>
						</div>

						<div className="space-y-4">
							<IconMapPinDown size={32} className="text-gray-900" />
							<div className="space-y-2">
								<Title className="!text-gray-900">{ContactSection[0].contactDataCollection.items[2].title}</Title>
								<address className="text-base font-normal not-italic text-gray-700">
								{ContactSection[0].contactDataCollection.items[2].title}
								</address>
							</div>
						</div>

						<ContactForm />
					</div>

					<div className="col-span-12 pt-[3.125rem] tabletLg:col-span-6 tabletLg:col-start-7 tabletLg:pt-0">
						<div className="relative h-lvh max-h-[21.875rem] laptop:max-h-[42.375rem]">
							<NextImage
								fill
								src={ContactSection[0].image.url}
								alt={ContactSection[0].image.title}
								sizes="27.033vw"
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</Section>

			<Map />

			<Section className="container mx-auto">
				<div className="grid grid-cols-12">
					<div className="col-span-12 mb-5 tabletLg:col-span-4 tabletLg:mb-0">
						<SectionTitle level={3}>
							{FaqModule[0].title}
						</SectionTitle>
					</div>
					<div className="col-span-12 tabletLg:col-span-6 tabletLg:col-start-7">
						<Accordion type="single" collapsible>
							{FaqModule[0].faqCollection.items.map((faq:any, index:number) => (
								<AccordionItem value="item-1" key={index}>
									<AccordionTrigger className="text-left">
										<Title className="!font-bold">
											{faq.title}
										</Title>
									</AccordionTrigger>
									<AccordionContent>
										<Description className="text-gray-600">
											{faq.description}
										</Description>
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</Section>
		</>
	);
};

export default ContactPage;
