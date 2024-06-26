"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { LogoColor } from "@/assets/logo/LogoColor";
import { LogoDark } from "@/assets/logo/LogoDark";
import { Navigation } from "@/components/Navigation";

export const Header = () => {
	const pathname = usePathname();
	return (
		<header className="py-6">
			<div className="container mx-auto flex flex-row items-center justify-between">
				<NextLink href="/">
					{pathname === "/" ? <LogoColor /> : <LogoDark />}
				</NextLink>
				<Navigation />
			</div>
		</header>
	);
};
