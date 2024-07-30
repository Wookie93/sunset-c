import { Textarea, TextareaProps } from "@/components/ui/textarea";

export const TextareaField = ({ ...props }: TextareaProps) => {
	return (
		<Textarea
			{...props}
			className="resize-none rounded-3xl border-none bg-gray-100 px-4 placeholder:text-gray-900 focus-visible:ring-gray-200"
			rows={10}
		/>
	);
};
