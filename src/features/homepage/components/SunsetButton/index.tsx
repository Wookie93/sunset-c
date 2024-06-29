import { Button, ButtonProps } from "@/components/ui/button";
import { IconChevronRight } from "@tabler/icons-react";
import { RefAttributes } from "react";

type SunsetButtonProps = ButtonProps &
	RefAttributes<HTMLButtonElement> & {
		text: string;
	};

export const SunsetButton = ({ text, ...props }: SunsetButtonProps) => {
	return (
		<Button
			{...props}
			className="flex min-w-40 flex-row items-center justify-between rounded-none border border-transparent border-b-gray-100 bg-transparent px-0 py-4 hover:bg-transparent"
		>
			<span className="text-xs uppercase text-white">{text}</span>
			<IconChevronRight size={12} className="text-main-gold" />
		</Button>
	);
};
