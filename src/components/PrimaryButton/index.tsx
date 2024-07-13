import { clsx } from "clsx";
import { HTMLAttributes } from "react";

type PrimaryButtonProps = {
	children: React.ReactNode;
	className?: HTMLAttributes<string>["className"];
};

export const PrimaryButton = ({ children, className }: PrimaryButtonProps) => {
	return (
		<button
			type="button"
			className={clsx({
				"rounded-3xl bg-lion px-7 py-3.5 text-xs uppercase transition-all duration-300 hover:bg-main-gold":
					true,
				[className ?? ""]: className,
			})}
		>
			{children}
		</button>
	);
};
