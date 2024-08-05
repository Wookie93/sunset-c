import { Description } from "@/components/Description";
import React from "react";
import NextImage from "next/image";

type BanerProps = {
	title: string;
	description: string;
};

export const Baner = ({ title, description }: BanerProps) => {
	return (
		<div className="relative overflow-hidden bg-lion laptop:h-[25rem]">
			<NextImage
				fill
				src="https://res.cloudinary.com/dstimijog/image/upload/v1721677331/sunset-house/subpage_baner_cr4ttl.jpg"
				alt="Tatry i okolice"
				sizes="100vw"
				className="object-cover mix-blend-soft-light grayscale"
			/>
			<div className="container mx-auto grid grid-cols-12 pb-6 pt-32 laptop:pt-40">
				<div className="col-span-12 space-y-2 laptop:col-span-4">
					<h1 className="text-[1.875rem] font-bold laptop:text-[2.625rem]">
						{title}
					</h1>
					<Description>{description}</Description>
				</div>
			</div>
		</div>
	);
};
