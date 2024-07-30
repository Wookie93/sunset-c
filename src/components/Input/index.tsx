import { Input, InputProps } from "@/components/ui/input";

export const InputField = ({ ...props }: InputProps) => {
	return (
		<Input
			className="min-h-[48px] rounded-full border-none bg-gray-100 px-4 placeholder:text-gray-900 focus-visible:ring-gray-200"
			{...props}
		/>
	);
};
