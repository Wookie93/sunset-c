import NextLink, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { clsx } from "clsx";
import { IconChevronRight } from "@tabler/icons-react";

type ButtonLinkProps = LinkProps & {
	children: ReactNode;
	type: "primary" | "bordered" | "darken";
};

export const ButtonLink = ({
	href,
	type,
	children,
	...props
}: ButtonLinkProps) => {
	return (
		<NextLink
			{...props}
			href={href}
			className={clsx({
				"flex min-w-44 max-w-48 flex-row items-center justify-between space-x-6 rounded-3xl px-4 py-3.5 text-xs uppercase text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-gray-100":
					true,
				"bg-lion": type === "primary",
				"border border-solid border-gray-900 bg-transparent":
					type === "bordered",
				"bg-gray-900 !text-gray-100 hover:bg-gray-200 hover:!text-gray-800":
					type === "darken",
			})}
		>
			{children}
			<IconChevronRight
				size={12}
				className={
					type === "bordered"
						? "text-lion"
						: type === "darken"
							? "text-lion"
							: "text-gray-100"
				}
			/>
		</NextLink>
	);
};
