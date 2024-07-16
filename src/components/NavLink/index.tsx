"use client";
import NextLink, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

type NavLinkProps = {
	href: string;
	children: PropsWithChildren["children"];
} & LinkProps;

export const NavLink = ({ href, children, ...props }: NavLinkProps) => {
	return (
		<li>
			<NextLink {...props} href={href} className="text-xl laptop:text-sm">
				{children}
			</NextLink>
		</li>
	);
};
