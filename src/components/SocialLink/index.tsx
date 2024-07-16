import NextLink from "next/link";
import { UrlObject } from "node:url";
import { HTMLAttributes, ReactNode } from "react";

type SocialLinkProps = {
	href: string | UrlObject;
	children: ReactNode;
	className?: HTMLAttributes<string>["className"];
};

export const SocialLink = ({ href, children }: SocialLinkProps) => {
	return (
		<NextLink
			className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-900 text-gray-900 transition-colors duration-300 hover:bg-gray-900 hover:text-gray-100 laptop:h-9 laptop:w-9 laptop:border-gray-100 laptop:text-gray-100 laptop:hover:bg-gray-100 laptop:hover:text-gray-900"
			href={href}
			target="_blank"
			rel="noreferrer"
		>
			{children}
		</NextLink>
	);
};
