import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";
import { SocialLink } from "@/components/SocialLink";

export const Socials = () => {
	return (
		<div className="flex flex-row max-laptop:space-x-6 laptop:flex-col laptop:space-y-2">
			<SocialLink href="https://www.facebook.com">
				<IconBrandFacebook
					className="h-6 w-6 laptop:h-4 laptop:w-4"
					stroke={1}
				/>
			</SocialLink>
			<SocialLink href="https://www.instagram.com">
				<IconBrandInstagram
					className="h-6 w-6 laptop:h-4 laptop:w-4"
					stroke={1}
				/>
			</SocialLink>
		</div>
	);
};
