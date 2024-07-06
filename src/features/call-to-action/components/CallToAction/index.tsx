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
		<div className="relative h-screen max-h-[20rem] overflow-hidden bg-gray-900">
			<NextImage
				fill
				priority
				src="https://res.cloudinary.com/dstimijog/image/upload/v1720268783/sunset-house/call-to-action_mn5dri.jpg"
				alt="Sunset House"
				className="object-cover opacity-70 mix-blend-hard-light grayscale"
				sizes="100vw"
			/>
			<div className="container relative z-10 mx-auto grid h-full grid-cols-12 items-center justify-items-center">
				<div className="col-span-6 col-start-1 col-end-4">
					<h3 className="text-[2rem] font-bold leading-10 text-gray-100">
						{title}
					</h3>
				</div>
				<div className="col-span-6 col-start-7 col-end-10 space-y-4">
					<Description className="text-gray-100">{description}</Description>
					<ButtonLink href={buttonHref ?? "/"} type="primary">
						{buttonText}
					</ButtonLink>
				</div>
			</div>
		</div>
	);
};
