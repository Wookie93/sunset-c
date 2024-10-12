import { NavLink } from "@/components/NavLink";
import { HTMLAttributes } from "react";
import { clsx } from "clsx";
import { ContenfulNavigationLink } from "@/types/contefulTypes";


type NavigationProps = {
	className?: HTMLAttributes<string>["className"];
	navigationLinks: ContenfulNavigationLink[]
};


export const Navigation = ({ className, navigationLinks}: NavigationProps) => {

	return (
		<nav>
			<ul
				className={clsx({
					"flex flex-col laptop:flex-row laptop:space-x-8": true,
					[className ?? ""]: true,
				})}
			>
				{navigationLinks && navigationLinks.map((el,index) => (
					<NavLink key={!el.sys ? index : el.sys.id} href={el.linkTo.slug} aria-label={el.name}>
						{el.name}
					</NavLink>
				))}

			</ul>
		</nav>
	);
};
