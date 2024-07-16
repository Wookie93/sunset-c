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
				"text-base font-semibold text-gray-900 laptop:text-xl": true,
				[className ?? ""]: className,
			})}
		>
			{children}
		</h4>
	);
};
