import { ReactNode } from "react";

export const ErrorText = ({ children }: { children: ReactNode }) => {
	return <span className="text-xs text-pink">{children}</span>;
};
