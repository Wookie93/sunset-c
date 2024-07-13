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

export const ContactSection = () => {
	return (
		<Section className="mx-auto pt-0 tablet:container">
			<div className="grid laptop:grid-cols-2">
				<div className="min-h-[36.25rem] space-y-10 bg-gray-900 p-5 laptop:rounded-bl-2xl laptop:rounded-tl-2xl laptop:p-12">
					<div className="space-y-4">
						<IconMail size={32} className="text-gray-100" />
						<div className="space-y-2">
							<Title className="!text-gray-100">Email</Title>
							<Description className="text-gray-400">Napisz do nas</Description>
							<a
								href="mailto:rezerwacja@sunsethouse.com"
								className="block text-base font-normal text-lion underline"
							>
								rezerwacja@sunsethouse.com
							</a>
						</div>
					</div>

					<div className="space-y-4">
						<IconDeviceMobileVibration size={32} className="text-gray-100" />
						<div className="space-y-2">
							<Title className="!text-gray-100">Telefon</Title>
							<Description className="text-gray-400">
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
						<IconMapPinDown size={32} className="text-gray-100" />
						<div className="space-y-2">
							<Title className="!text-gray-100">Biuro</Title>
							<address className="text-base font-normal not-italic text-gray-400">
								ul. Poręba Wielka 123, 34-735 Niedźwiedź
							</address>
						</div>
					</div>
				</div>
				<div className="relative min-h-[36.25rem] bg-lion p-5 laptop:rounded-br-2xl laptop:rounded-tr-2xl laptop:p-12">
					<NextImage
						fill
						src="https://res.cloudinary.com/dstimijog/image/upload/v1720272583/sunset-house/image_mrhqmh.jpg"
						alt="Piękno przyrody i jazda na rowerze"
						sizes="22.004vw"
						className="object-cover opacity-70 mix-blend-soft-light grayscale"
					/>
					<div className="relative z-10 flex h-full max-w-64 flex-col justify-center space-y-11">
						<Title className="!text-3xl !font-bold text-gray-900">
							Skontaktuj się z nami!
						</Title>
						<Description className="text-gray-900">
							Zadzwoń lub wyślij wiadomość, aby zarezerwować nasz domek.
						</Description>
						<ButtonLink href="/" type="darken">
							Przejdź do kontaktu
						</ButtonLink>
					</div>
				</div>
			</div>
		</Section>
	);
};
