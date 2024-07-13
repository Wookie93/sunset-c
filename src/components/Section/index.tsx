import { clsx } from "clsx";
import { HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLDivElement>;

export const Section = ({ children, className }: SectionProps) => {
	return (
		<section
			className={clsx({
				"py-[3.125rem] laptop:py-[6.25rem]": true,
				[className ?? ""]: className,
			})}
		>
			{children}
		</section>
	);
};
