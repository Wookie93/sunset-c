import { ContactSection } from "@/features/contact-section";
import NextImage from "next/image";
import React from "react";
import { Baner } from "@/components/Baner";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { Description } from "@/components/Description";
import { ButtonLink } from "@/components/ButtonLink";
import { gallery } from "@/app/gallery/mock";

const GalleryPage = () => {
	return (
		<>
			<Baner
				title="Galeria"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit euismod in pellentesque massa placerat."
			/>

			<Section className="container mx-auto space-y-10 laptop:!pb-0">
				{gallery.map((el) => (
					<div
						key={el.id}
						className="grid grid-cols-12 gap-y-4 rounded-2xl border border-gray-100 p-4 laptop:p-10"
					>
						<div className="order-2 col-span-12 flex flex-col justify-between gap-y-4 tablet:order-1 tablet:col-span-4">
							<div className="space-y-4 laptop:space-y-7">
								<SectionTitle level={3}>{el.title}</SectionTitle>
								<Description className="text-gray-600">
									{el.description}
								</Description>
							</div>
							<ButtonLink type="bordered" href={`/gallery/${el.slug}`}>
								Zobacz więcej
							</ButtonLink>
						</div>
						<div className="relative order-1 col-span-12 min-h-[15.188rem] tablet:order-2 tablet:col-span-4 tablet:col-start-9">
							<NextImage
								src={el.image}
								alt={el.title}
								fill
								sizes="16.503vw"
								className="object-cover"
							/>
						</div>
					</div>
				))}
			</Section>
			<ContactSection />
		</>
	);
};

export default GalleryPage;
