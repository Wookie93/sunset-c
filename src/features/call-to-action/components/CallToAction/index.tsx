

import NextImage from "next/image";
import { Description } from "@/components/Description";
import { ButtonLink } from "@/components/ButtonLink";
import { clsx } from "clsx";

import { ContentfulImage } from "@/types/contefulTypes";

type CallToActionProps = {
	data: {
		title: string;
		description: string;
		image:ContentfulImage;
		button:{
			textOnButton:string | null;
			linkTo:{
				slug:string;
			};
			isSecondary:boolean | null;
			isPrimaryBlack:boolean;
		};
	};
};

export const CallToAction = ({
	data
}: CallToActionProps) => {

	const { title, description, image, button} = data;
	return (
		<div className="relative overflow-hidden bg-gray-900 tablet:h-screen tablet:max-h-[20rem]">
			<NextImage
				fill
				priority
				src={image.url}
				alt={image.title}
				className="object-cover opacity-70 mix-blend-hard-light grayscale"
			/>
			<div className="container relative z-10 mx-auto grid items-center justify-items-center space-y-3 py-[6.25rem] tablet:h-full tablet:py-0 laptop:grid-cols-12">
				<div
					className={clsx({
						"tablet:col-span-6 tablet:col-start-1 tablet:col-end-4": true,
						"tabletLg:col-end-6": true,
					})}
				>
					<h3 className="text-[2rem] font-bold leading-10 text-gray-100">
						{title}
					</h3>
				</div>
				<div className="space-y-4 tablet:col-span-6 tablet:col-start-7 tablet:col-end-10">
					<Description className="text-gray-100">{description}</Description>
					<ButtonLink href={button.linkTo.slug ?? "/"} type="primary">
						{button.textOnButton}
					</ButtonLink>
				</div>
			</div>
		</div>
	);
};
