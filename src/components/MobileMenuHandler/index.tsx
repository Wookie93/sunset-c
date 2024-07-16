import { IconMenu2 } from "@tabler/icons-react";
import { type ButtonProps } from "@/components/ui/button";
import { clsx } from "clsx";
import { ReactNode } from "react";

type MobileMenuHandlerProps = {
	icon?: ReactNode;
	menuName?: string;
	className?: string;
};
export const MobileMenuHandler = ({
	icon = <IconMenu2 />,
	className,
	...props
}: MobileMenuHandlerProps & ButtonProps) => {
	return (
		<button
			className={clsx(
				"flex h-12 flex-row items-center space-x-3 text-gray-100",
				className,
			)}
			{...props}
		>
			{icon ? icon : <IconMenu2 />}
		</button>
	);
};
