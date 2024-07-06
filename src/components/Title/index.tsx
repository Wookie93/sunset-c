import { DetailedHTMLProps, HTMLAttributes } from "react";
import { clsx } from "clsx";

type TitleProps = DetailedHTMLProps<
	HTMLAttributes<HTMLHeadingElement>,
	HTMLHeadingElement
>;

export const Title = ({ children, className }: TitleProps) => {
	return (
		<h4
			className={clsx({
				"text-xl font-semibold text-gray-900": true,
				[className ?? ""]: className,
			})}
		>
			{children}
		</h4>
	);
};
