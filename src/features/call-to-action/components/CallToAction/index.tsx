import NextImage from "next/image";
import { Description } from "@/components/Description";
import { ButtonLink } from "@/components/ButtonLink";
import { LinkProps } from "next/link";

type CallToActionProps = {
	title: string;
	description: string;
	buttonText: string;
	buttonHref: LinkProps["href"];
};

export const CallToAction = ({
	title,
	description,
	buttonText,
	buttonHref,
}: CallToActionProps) => {
	return (
		<div className="relative overflow-hidden bg-gray-900 tablet:h-screen tablet:max-h-[20rem]">
			<NextImage
				fill
				priority
				src="https://res.cloudinary.com/dstimijog/image/upload/v1720268783/sunset-house/call-to-action_mn5dri.jpg"
				alt="Sunset House"
				className="object-cover opacity-70 mix-blend-hard-light grayscale"
				sizes="100vw"
			/>
			<div className="container relative z-10 mx-auto grid items-center justify-items-center space-y-3 py-[6.25rem] tablet:h-full tablet:grid-cols-12 tablet:py-0">
				<div className="tablet:col-span-6 tablet:col-start-1 tablet:col-end-4">
					<h3 className="text-[2rem] font-bold leading-10 text-gray-100">
						{title}
					</h3>
				</div>
				<div className="space-y-4 tablet:col-span-6 tablet:col-start-7 tablet:col-end-10">
					<Description className="text-gray-100">{description}</Description>
					<ButtonLink href={buttonHref ?? "/"} type="primary">
						{buttonText}
					</ButtonLink>
				</div>
			</div>
		</div>
	);
};
