import { HTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

type HeadingProps = {
	children: ReactNode;
	className?: HTMLAttributes<string>["className"];
};

export const Heading = ({ children, className }: HeadingProps) => {
	return (
		<h1
			className={clsx({
				"text-4xl font-bold laptop:text-7xl": true,
				[className ?? ""]: true,
			})}
		>
			{children}
		</h1>
	);
};
