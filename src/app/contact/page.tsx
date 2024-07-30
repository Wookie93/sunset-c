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
import { InputField } from "@/components/Input";
import { TextareaField } from "@/components/Textarea";
import { Button } from "@/components/ui/button";
import { Map } from "@/features/map";
import NextImage from "next/image";

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

						<form>
							<fieldset className="mb-6 space-y-3">
								<InputField placeholder="Adres e-mail" type="email" />
								<TextareaField placeholder="Wiadomość" />
							</fieldset>
							<Button
								type="submit"
								className="rounded-3xl bg-lion px-7 py-3.5 text-xs uppercase text-gray-900 transition-all duration-300 hover:bg-main-gold"
							>
								Wyslij
							</Button>
						</form>
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
		</>
	);
};

export default ContactPage;
