import { NavLink } from "@/components/NavLink";

export const Navigation = () => {
	return (
		<nav>
			<ul className="flex flex-col laptop:flex-row laptop:space-x-8">
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
