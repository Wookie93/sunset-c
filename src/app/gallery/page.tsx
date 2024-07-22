import { ContactSection } from "@/features/contact-section";
import NextImage from "next/image";
import React from "react";
import { Baner } from "@/components/Baner";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { Description } from "@/components/Description";
import { ButtonLink } from "@/components/ButtonLink";

const GalleryPage = () => {
	return (
		<>
			<Baner
				title="Galeria"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit euismod in pellentesque massa placerat."
			/>

			<Section className="container mx-auto space-y-10 !pb-0">
				<div className="grid grid-cols-12 rounded-2xl border border-gray-100 px-10 py-10">
					<div className="col-span-4 flex flex-col justify-between">
						<div className="space-y-7">
							<SectionTitle level={3}>Domek od wewnątrz</SectionTitle>
							<Description className="text-gray-600">
								A short description of the service you offer or section of the
								website to which the card leads.
							</Description>
						</div>
						<ButtonLink type="bordered" href="/">
							Zobacz więcej
						</ButtonLink>
					</div>
					<div className="relative col-span-4 col-start-9 min-h-[15.188rem]">
						<NextImage
							src="https://res.cloudinary.com/dstimijog/image/upload/v1721679714/sunset-house/card2_nrkbn4.jpg"
							alt="Domek od wewnątrz"
							fill
							sizes="16.503vw"
							className="object-cover"
						/>
					</div>
				</div>

				<div className="grid grid-cols-12 rounded-2xl border border-gray-100 px-10 py-10">
					<div className="col-span-4 flex flex-col justify-between">
						<div className="space-y-7">
							<SectionTitle level={3}>Domek od zewnątrz</SectionTitle>
							<Description className="text-gray-600">
								A short description of the service you offer or section of the
								website to which the card leads.
							</Description>
						</div>
						<ButtonLink type="bordered" href="/">
							Zobacz więcej
						</ButtonLink>
					</div>
					<div className="relative col-span-4 col-start-9 min-h-[15.188rem]">
						<NextImage
							src="https://res.cloudinary.com/dstimijog/image/upload/v1721679718/sunset-house/card1_e5zfzx.jpg"
							alt="Domek od zewnątrz"
							fill
							sizes="16.503vw"
							className="object-cover"
						/>
					</div>
				</div>
			</Section>
			<ContactSection />
		</>
	);
};

export default GalleryPage;
