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
import { Map } from "@/features/map";
import NextImage from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { SectionTitle } from "@/components/SectionTitle";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const ContactPage = () => {
	return (
		<>
			<Baner
				title="Kontakt"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit euismod in pellentesque massa placerat."
			/>

			<Section className="container mx-auto">
				<div className="grid grid-cols-12">
					<div className="col-span-5 space-y-10">
						<div className="space-y-4">
							<IconMail size={32} className="text-gray-900" />
							<div className="space-y-2">
								<Title className="!text-gray-900">Email</Title>
								<Description className="text-gray-700">
									Napisz do nas
								</Description>
								<a
									href="mailto:rezerwacja@sunsethouse.com"
									className="block text-base font-normal text-lion underline"
								>
									rezerwacja@sunsethouse.com
								</a>
							</div>
						</div>

						<div className="space-y-4">
							<IconDeviceMobileVibration size={32} className="text-gray-900" />
							<div className="space-y-2">
								<Title className="!text-gray-900">Telefon</Title>
								<Description className="text-gray-700">
									Zadzwoń do nas
								</Description>
								<a
									href="tel:+48573199465"
									className="block text-base font-normal text-lion"
								>
									+48 573 199 465
								</a>
							</div>
						</div>

						<div className="space-y-4">
							<IconMapPinDown size={32} className="text-gray-900" />
							<div className="space-y-2">
								<Title className="!text-gray-900">Biuro</Title>
								<address className="text-base font-normal not-italic text-gray-700">
									ul. Poręba Wielka 123, 34-735 Niedźwiedź
								</address>
							</div>
						</div>

						<ContactForm />
					</div>

					<div className="col-span-1 pt-[3.125rem] tabletLg:col-span-6 tabletLg:col-start-7 tabletLg:pt-0">
						<div className="relative h-lvh max-h-[21.875rem] laptop:max-h-[42.375rem]">
							<NextImage
								fill
								src="https://res.cloudinary.com/dstimijog/image/upload/v1722372612/contact_cityrt.jpg"
								alt="Relaks na termach"
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
					<div className="col-span-4">
						<SectionTitle level={3}>
							Sunset House - najczęściej zadawane pytania
						</SectionTitle>
					</div>
					<div className="col-span-6 col-start-7">
						<Accordion type="single" collapsible>
							<AccordionItem value="item-1">
								<AccordionTrigger>
									<Title className="!font-bold">
										W jakich godzinach w domach trwa doba hotelowa?
									</Title>
								</AccordionTrigger>
								<AccordionContent>
									<Description className="text-gray-600">
										Please provide comprehensive answers to those questions. You
										will save lots of time and money by eliminating the
										necessity to give constant support. You also will keep your
										clients time cause they will quickly find the answers to all
										their questions.
									</Description>
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-2">
								<AccordionTrigger>
									<Title className="!font-bold">
										Czy mogę zamówić śniadanie do domku?
									</Title>
								</AccordionTrigger>
								<AccordionContent>
									<Description className="text-gray-600">
										Please provide comprehensive answers to those questions. You
										will save lots of time and money by eliminating the
										necessity to give constant support. You also will keep your
										clients time cause they will quickly find the answers to all
										their questions.
									</Description>
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-3">
								<AccordionTrigger>
									<Title className="!font-bold">
										Jak wygląda dojazd do domku?
									</Title>
								</AccordionTrigger>
								<AccordionContent>
									<Description className="text-gray-600">
										Please provide comprehensive answers to those questions. You
										will save lots of time and money by eliminating the
										necessity to give constant support. You also will keep your
										clients time cause they will quickly find the answers to all
										their questions.
									</Description>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
			</Section>
		</>
	);
};

export default ContactPage;
