'use client'

import NextLink from "next/link";
import {clsx} from "clsx";
import {MobileMenuHandler} from "@/components/MobileMenuHandler";
import {useNavigationContext} from "@/providers/navigation-provider";
import {IconMenu2, IconX} from "@tabler/icons-react";
import {Navigation} from "../Navigation";
import {usePathname} from "next/navigation";
import {ContenfulHeaderModuleItem, ContenfulNavigationLink} from "@/types/contefulTypes";
import {ButtonLink} from "../ButtonLink";
import {LogoDark} from "@/assets/logo/LogoDark";
import {LogoColor} from "@/assets/logo/LogoColor";

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

	const { isOpen, setIsOpen } = useNavigationContext();
	return (
		<header className="absolute left-0 right-0 top-0 z-[101] w-full py-6">
			<div className="container mx-auto flex flex-row items-center justify-between">
				<NextLink href="/">
					{isOpen || pathname !== "/" ? <LogoDark /> : <LogoColor />}
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
