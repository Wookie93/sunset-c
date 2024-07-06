import { IconPlayerPlay } from "@tabler/icons-react";
import { HTMLAttributes } from "react";

type PlayButtonProps = HTMLAttributes<HTMLButtonElement>;

export const PlayButton = ({ ...props }: PlayButtonProps) => {
	return (
		<button
			type="button"
			className="group relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-2 border-solid border-gray-100 bg-transparent transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
			{...props}
		>
			<IconPlayerPlay
				size={32}
				className="text-gray-100 transition-all duration-300 group-hover:text-gray-900"
			/>
		</button>
	);
};
