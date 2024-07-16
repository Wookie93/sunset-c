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
				"relative z-10 text-2xl font-bold text-gray-900 after:absolute after:left-0 after:top-1/3 after:z-[-1] after:h-1.5 after:w-full after:max-w-64 after:bg-main-gold/60 laptop:text-3xl":
					true,
				[className ?? ""]: className,
			})}
		>
			{children}
		</Tag>
	);
};
