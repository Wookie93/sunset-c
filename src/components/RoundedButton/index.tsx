import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";

export const RoundedButton = ({
	children,
	className,
	...props
}: ButtonProps) => {
	return (
		<Button
			{...props}
			className={cn(
				"flex h-12 w-12 items-center justify-center rounded-full border border-gray-700 bg-transparent",
				className,
			)}
		>
			{children}
		</Button>
	);
};
