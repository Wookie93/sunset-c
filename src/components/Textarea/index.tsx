import { Textarea, TextareaProps } from "@/components/ui/textarea";
import { clsx } from "clsx";

export const TextareaField = ({ ...props }: TextareaProps) => {
	return (
		<Textarea
			{...props}
			className={clsx(
				"resize-none rounded-3xl border-none bg-gray-100 px-4 placeholder:text-gray-900 focus-visible:ring-gray-200",
				props.className,
			)}
			rows={10}
		/>
	);
};
