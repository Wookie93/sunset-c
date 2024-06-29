import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";
import { SocialLink } from "@/components/SocialLink";

export const Socials = () => {
	return (
		<div className="flex flex-col space-y-2">
			<SocialLink href="https://www.facebook.com">
				<IconBrandFacebook size={16} />
			</SocialLink>
			<SocialLink href="https://www.instagram.com">
				<IconBrandInstagram size={16} />
			</SocialLink>
		</div>
	);
};
