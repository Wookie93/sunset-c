'use client'

import NextLink from "next/link";
import { Logo } from "@/assets/logo/Logo";
import { clsx } from "clsx";
import { MobileMenuHandler } from "@/components/MobileMenuHandler";
import { useNavigationContext } from "@/providers/navigation-provider";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Navigation } from "../Navigation";
import { usePathname } from "next/navigation";
import { ContenfulHeaderModuleItem, ContenfulNavigationLink } from "@/types/contefulTypes";
import { ButtonLink } from "../ButtonLink";

interface HeaderProps{
	headerData: {
		logo:{
		  url: string;
		}
		logoDark:{
		  url: string;
		}
		modulesCollection:{
		  items: ContenfulHeaderModuleItem[];
		}
	  }
	navigationLinks:ContenfulNavigationLink[]
}

export const Header = ({headerData, navigationLinks}:HeaderProps) => {
	const pathname = usePathname();
	
	const {modulesCollection} = headerData
	console.log(modulesCollection)

	const { isOpen, setIsOpen } = useNavigationContext();
	return (
		<header className="absolute left-0 right-0 top-0 z-[101] w-full py-6">
			<div className="container mx-auto flex flex-row items-center justify-between">
				<NextLink href="/">
					{isOpen || pathname !== "/" ? <Logo url={headerData.logoDark.url} /> : <Logo url={headerData.logo.url} />}
				</NextLink>
				<Navigation navigationLinks={navigationLinks} className={clsx(
						"hidden laptop:flex",
						pathname === "/" ? "text-white" : "",
					)} />
				<MobileMenuHandler
					onClick={() => setIsOpen(!isOpen)}
					className={clsx(
						isOpen || pathname !== "/" ? "text-gray-900" : "",
						"laptop:hidden",
					)}
					icon={isOpen ? <IconX /> : <IconMenu2 />}
				/>
				<ButtonLink
					className="hidden laptop:block"
					type="primary"
					href={modulesCollection.items[1].linkTo.slug}
					pathname={pathname}
				>
					{modulesCollection.items[1].textOnButton}
				</ButtonLink>
			</div>
		</header>
	);
};
