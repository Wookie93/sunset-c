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
				"text-4xl font-bold laptop:text-5xl 2xl:text-6xl 3xl:text-7xl": true,
				[className ?? ""]: true,
			})}
		>
			{children}
		</h1>
	);
};
