export const PrimaryButton = ({ children }: { children: React.ReactNode }) => {
	return (
		<button
			type="button"
			className="rounded-3xl bg-lion px-7 py-3.5 text-xs uppercase transition-all duration-300 hover:bg-main-gold"
		>
			{children}
		</button>
	);
};
