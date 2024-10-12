"use client";

import { Baner } from "@/components/Baner";
import React from "react";
import { ContactSection } from "@/features/contact-section";
import { Section } from "@/components/Section";
import NextLink from "next/link";
import { clsx } from "clsx";
import { Masonry } from "@/features/gallery/components/Masonry";
import { ContentCardSkeletonList } from "@/components/CardSkeleton";
import NextImage from "next/image";
import { groupByTypename } from "@/lib/utils";

type GalleryEntryProps = {
	params: any;
	pageList:{pageName:string; slug: string}[]
};

export const GalleryEntry = ({ params, pageList}: GalleryEntryProps) => {

	const {modulesCollection, imagesCollection} = params;

	const {SecondaryHero, ContactSection: ContactSectionModule} = groupByTypename(modulesCollection.items);

	return (
		<>
{			!SecondaryHero ? null : <Baner
				title={SecondaryHero[0].title}
				description={SecondaryHero[0].description}
				image={SecondaryHero[0].image}
			/>
}
			<Section className="container mx-auto laptop:!pb-0">
				<div className="grid grid-cols-12 laptop:gap-10">
					<aside className="col-span-12 mb-6 max-h-[4.125rem] rounded-xl border border-gray-200 p-2 tablet:col-span-4 tablet:mb-0 tabletLg:col-span-3 laptop:max-h-[8.125rem] laptop:p-4">
						<ul>
							{pageList.map((el:{pageName:string; slug: string}, index:number) => (
								el.slug !== "/galeria" && (
									<li
										key={index}
										className={clsx({
											"laptop:py-3": true,
											"border-b border-gray-200": index === 0,
										})}
									>
										<NextLink
											href={`${el.slug}`}
											className="text-xs laptop:text-base"
										>
											{el.pageName}
										</NextLink>
									</li>
								)
							))}
						</ul>
					</aside>
					<div className="col-span-12 tablet:col-span-8 tabletLg:col-span-9">
						<Masonry
							items={[...(imagesCollection.items || [])]}
							config={{
								columns: [1, 2, 3],
								gap: [24, 16, 16],
								media: [601, 768, 1024],
							}}
							placeholder={<ContentCardSkeletonList />}
							render={(item,index) => (
								<NextImage
									key={index}
									src={item.url}
									alt={item.title}
									width={311}
									height={260}
									className="max-tablet:w-full"
								/>
							)}
						/>
					</div>
				</div>
			</Section>
			{ContactSectionModule ? <ContactSection data={ContactSectionModule[0]} /> : null}
		</>
	);
};