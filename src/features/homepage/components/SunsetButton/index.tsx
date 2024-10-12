import NextLink, { LinkProps } from "next/link";
import { IconChevronRight } from "@tabler/icons-react";

type SunsetButtonProps = LinkProps & {
		text: string;
		href: string;
	};

export const SunsetButton = ({ text, href, ...props }: SunsetButtonProps) => {
	return (
			<NextLink href={href} {...props} className="flex min-w-40 flex-row items-center justify-between rounded-none border border-transparent border-b-gray-100 bg-transparent px-0 py-4 hover:bg-transparent">
				<span className="text-xs uppercase text-white">{text}</span>
				<IconChevronRight size={12} className="text-main-gold" />
			</NextLink>
	);
};
