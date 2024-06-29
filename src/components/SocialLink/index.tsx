import NextLink from "next/link";
import { UrlObject } from "node:url";
import { ReactNode } from "react";

type SocialLinkProps = {
	href: string | UrlObject;
	children: ReactNode;
};

export const SocialLink = ({ href, children }: SocialLinkProps) => {
	return (
		<NextLink
			className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-100 text-gray-100 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-900"
			href={href}
			target="_blank"
			rel="noreferrer"
		>
			{children}
		</NextLink>
	);
};
