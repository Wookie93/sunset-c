"use client";

import { gallery } from "@/app/gallery/mock";
import { Baner } from "@/components/Baner";
import React from "react";
import { ContactSection } from "@/features/contact-section";
import { Section } from "@/components/Section";
import NextLink from "next/link";
import { clsx } from "clsx";
import { Masonry } from "@/features/gallery/components/Masonry";
import { ContentCardSkeletonList } from "@/components/CardSkeleton";
import NextImage from "next/image";

type GalleryEntryProps = {
	params: { slug: string };
};

export const GalleryEntry = ({ params }: GalleryEntryProps) => {
	const galleryEntry = gallery.find((entry) => entry.slug === params.slug);
	return (
		<>
			<Baner
				title={galleryEntry?.title || ""}
				description={galleryEntry?.description || ""}
			/>
			<Section className="container mx-auto !pb-0">
				<div className="grid grid-cols-12 gap-10">
					<aside className="col-span-3 rounded-xl border border-gray-200 p-4">
						<ul>
							{gallery.map((el) => (
								<li
									key={el.id}
									className={clsx({
										"py-3": true,
										"border-b border-gray-200": el.id === 0,
									})}
								>
									<NextLink href={`/gallery/${el.slug}`} className="text-base">
										{el.title}
									</NextLink>
								</li>
							))}
						</ul>
					</aside>
					<div className="col-span-9">
						<Masonry
							items={[...(gallery || [])]}
							config={{
								columns: [1, 2, 3],
								gap: [24, 12, 6],
								media: [640, 768, 1024],
							}}
							placeholder={<ContentCardSkeletonList />}
							render={(item) => (
								<NextImage
									key={item.id}
									src={item.image}
									alt={item.title}
									width={260}
									height={260}
								/>
							)}
						/>
					</div>
				</div>
			</Section>
			<ContactSection />
		</>
	);
};
