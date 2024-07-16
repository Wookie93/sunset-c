import { HTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

type DescriptionProps = {
	children: ReactNode;
	className?: HTMLAttributes<string>["className"];
};

export const Description = ({ children, className }: DescriptionProps) => {
	return (
		<p
			className={clsx({
				"text-sm font-normal 3xl:text-base": true,
				[className ?? ""]: true,
			})}
		>
			{children}
		</p>
	);
};
