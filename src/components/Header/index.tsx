"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { LogoColor } from "@/assets/logo/LogoColor";
import { LogoDark } from "@/assets/logo/LogoDark";
import { Navigation } from "@/components/Navigation";
import { PrimaryButton } from "@/components/PrimaryButton";
import { clsx } from "clsx";
import { MobileMenuHandler } from "@/components/MobileMenuHandler";
import { useNavigationContext } from "@/providers/navigation-provider";
import { IconMenu2, IconX } from "@tabler/icons-react";

export const Header = () => {
	const pathname = usePathname();
	const { isOpen, setIsOpen } = useNavigationContext();
	return (
		<header className="absolute left-0 right-0 top-0 z-[101] w-full py-6">
			<div className="container mx-auto flex flex-row items-center justify-between">
				<NextLink href="/">
					{isOpen || pathname !== "/" ? <LogoDark /> : <LogoColor />}
				</NextLink>
				<Navigation
					className={clsx(
						"hidden laptop:flex",
						pathname === "/" ? "text-white" : "",
					)}
				/>
				<MobileMenuHandler
					onClick={() => setIsOpen(!isOpen)}
					className={clsx(
						isOpen || pathname !== "/" ? "text-gray-900" : "",
						"laptop:hidden",
					)}
					icon={isOpen ? <IconX /> : <IconMenu2 />}
				/>
				<PrimaryButton className="hidden laptop:block">
					Zarezerwuj teraz
				</PrimaryButton>
			</div>
		</header>
	);
};
