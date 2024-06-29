"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { LogoColor } from "@/assets/logo/LogoColor";
import { LogoDark } from "@/assets/logo/LogoDark";
import { Navigation } from "@/components/Navigation";
import { PrimaryButton } from "@/components/PrimaryButton";

export const Header = () => {
	const pathname = usePathname();
	return (
		<header className="absolute z-10 w-full py-6">
			<div className="container mx-auto flex flex-row items-center justify-between">
				<NextLink href="/">
					{pathname === "/" ? <LogoColor /> : <LogoDark />}
				</NextLink>
				<Navigation className={pathname === "/" ? "text-white" : ""} />
				<PrimaryButton>Zarezerwuj teraz</PrimaryButton>
			</div>
		</header>
	);
};
