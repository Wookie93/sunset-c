"use client";

import NextImage from "next/image";
import { Heading, Socials, SunsetButton } from "@/features/homepage";
import { Button } from "@/components/ui/button";
import { IconMouse } from "@tabler/icons-react";
import { Description } from "@/components/Description";

type HeroProps = {
	data: {
		title: string;
		description: string;
		firstButton: {
			textOnButton: string;
			linkTo: {
				slug: string | null;
			};
			isSecondary: boolean;
			isPrimaryBlack: boolean;
		};
		secondButton: {
			textOnButton: string;
			linkTo: {
				slug: string | null;
			};
			isSecondary: boolean;
			isPrimaryBlack: boolean;
		};
		image: {
			url: string;
			width: number;
			height: number;
			title: string;
		};
	};
};

export const Hero = ({data}: HeroProps) => {
	const {title, description, firstButton, secondButton, image} = data;

	return (
		<div className="relative h-screen min-h-[40rem] bg-gray-700 max-tablet:max-h-[52.25rem]">
			<NextImage
				fill
				priority
				src={image.url}
				alt={image.title}
				sizes="100vw"
				className="object-cover mix-blend-soft-light grayscale"
			/>
			<div className="absolute left-12 top-1/3 hidden laptop:block">
				<Socials />
			</div>
			<div className="absolute bottom-12 left-1/2 -translate-x-1/2 transform laptop:left-12 laptop:translate-x-0">
				<Button className="flex flex-col items-center bg-transparent p-0 text-gray-100">
					<IconMouse size={30} />
					<span className="text-[10px] font-semibold uppercase text-white">
						scroll
					</span>
				</Button>
			</div>
			<div className="container relative top-1/2 mx-auto grid -translate-y-1/2 transform laptop:grid-cols-12">
				<div className="col-span-12 grid laptop:col-span-6 laptop:col-start-7 laptop:grid-cols-6">
					<div className="space-y-4 laptop:col-span-4 3xl:col-span-5">
						<Heading className="text-white">{title}</Heading>
						<Description className="text-white">
							{description}
						</Description>
						<div className="flex flex-row space-x-8 max-[390px]:flex-col max-[390px]:space-x-0 max-[390px]:space-y-4">
							<SunsetButton
								text={firstButton.textOnButton}
								href={firstButton.linkTo.slug ?? "/"}
							/>
							<SunsetButton
								text={secondButton.textOnButton}
								href={secondButton.linkTo.slug ?? "/"}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
