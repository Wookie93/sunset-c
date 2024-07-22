import { DetailedHTMLProps, HTMLAttributes, ReactHTML } from "react";
import { clsx } from "clsx";

type TitleProps = DetailedHTMLProps<
	HTMLAttributes<HTMLHeadingElement>,
	HTMLHeadingElement
> & {
	level: 1 | 2 | 3 | 4 | 5 | 6;
};

export const SectionTitle = ({ children, level, className }: TitleProps) => {
	const Tag = `h${level}` as keyof ReactHTML;
	return (
		<Tag
			className={clsx({
				"relative z-10 text-2xl font-bold text-gray-900 laptop:text-3xl": true,
				[className ?? ""]: className,
			})}
		>
			{children}
		</Tag>
	);
};
