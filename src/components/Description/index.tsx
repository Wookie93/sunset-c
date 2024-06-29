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
				"text-base font-normal": true,
				[className ?? ""]: true,
			})}
		>
			{children}
		</p>
	);
};
