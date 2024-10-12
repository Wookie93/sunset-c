import { Section } from "@/components/Section";
import NextImage from "next/image";
import React from "react";
import { Description } from "@/components/Description";
import { Title } from "@/components/Title";
import { ButtonLink } from "@/components/ButtonLink";
import {
	IconDeviceMobileVibration,
	IconMail,
	IconMapPinDown,
} from "@tabler/icons-react";
import { ContentfulContactSection } from "@/types/contefulTypes";

interface ContactSectionProps {
  data: ContentfulContactSection;
}

export const ContactSection = ({ data }: ContactSectionProps) => {

	const {title, subtitle, contactDataCollection, image, contactButton} = data;

	return (
		<Section className="mx-auto pt-0 tabletLg:container">
			<div className="grid tabletLg:grid-cols-2">
				<div className="space-y-10 bg-gray-900 p-5 tabletLg:rounded-bl-2xl tabletLg:rounded-tl-2xl tabletLg:p-12 laptop:min-h-[36.25rem]">
					<div className="space-y-4">
						<IconMail size={32} className="text-gray-100" />
						<div className="space-y-2">
							<Title className="!text-gray-100">{contactDataCollection.items[0].title}</Title>
							<Description className="text-gray-400">{contactDataCollection.items[0].subtitle}</Description>
							<a
								href={`mailto:${contactDataCollection.items[0].linkText}`}
								className="block text-base font-normal text-lion underline"
							>
								{contactDataCollection.items[0].linkText}
							</a>
						</div>
					</div>

					<div className="space-y-4">
						<IconDeviceMobileVibration size={32} className="text-gray-100" />
						<div className="space-y-2">
								<Title className="!text-gray-100">{contactDataCollection.items[1].title}</Title>
							<Description className="text-gray-400">
								{contactDataCollection.items[1].subtitle}
							</Description>
							<a
								href={`tel:+48${contactDataCollection.items[1].linkText}`}
								className="block text-base font-normal text-lion"
							>
								{contactDataCollection.items[1].linkText}
							</a>
						</div>
					</div>

					<div className="space-y-4">
						<IconMapPinDown size={32} className="text-gray-100" />
						<div className="space-y-2">
							<Title className="!text-gray-100">{contactDataCollection.items[2].title}</Title>
							<address className="text-base font-normal not-italic text-gray-400">
								{contactDataCollection.items[2].subtitle}
							</address>
						</div>
					</div>
				</div>
				<div className="relative bg-lion p-5 tabletLg:rounded-br-2xl tabletLg:rounded-tr-2xl tabletLg:p-12 laptop:min-h-[36.25rem]">
					<NextImage
						fill
						src={image.url}
						alt={image.title}
						sizes="22.004vw"
						className="object-cover opacity-70 mix-blend-soft-light grayscale"
					/>
					<div className="relative z-10 flex h-full max-w-64 flex-col justify-center space-y-11">
						<Title className="!text-3xl !font-bold text-gray-900">
							{title}
						</Title>
						<Description className="text-gray-900">
							{subtitle}
						</Description>
						<ButtonLink href={contactButton.linkTo.slug} type="darken">
							{contactButton.textOnButton || 'Przejdź do kontaktu'}
						</ButtonLink>
					</div>
				</div>
			</div>
		</Section>
	);
};
