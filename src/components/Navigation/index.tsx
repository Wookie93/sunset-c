import { NavLink } from "@/components/NavLink";
import { HTMLAttributes } from "react";
import { clsx } from "clsx";

type NavigationProps = {
	className?: HTMLAttributes<string>["className"];
};

export const Navigation = ({ className }: NavigationProps) => {
	return (
		<nav>
			<ul
				className={clsx({
					"flex flex-col laptop:flex-row laptop:space-x-8": true,
					[className ?? ""]: true,
				})}
			>
				<NavLink href="/about" aria-label="O domku">
					O domku
				</NavLink>
				<NavLink href="/gallery" aria-label="Galeria">
					Galeria
				</NavLink>
				<NavLink href="/pricing" aria-label="Cennik">
					Cennik
				</NavLink>
				<NavLink href="/neighborhood" aria-label="Okolica">
					Okolica
				</NavLink>
				<NavLink href="/contact" aria-label="Kontakt">
					Kontakt
				</NavLink>
			</ul>
		</nav>
	);
};
