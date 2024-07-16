"use client";
import { cn } from "@/lib/utils";
import { useNavigationContext } from "@/providers/navigation-provider";
import { Navigation } from "@/components/Navigation";
import { Socials } from "@/features/homepage";

export const MobileMenu = () => {
	const { isOpen } = useNavigationContext();

	return (
		<div
			className={cn(
				"fixed left-0 right-0 top-0 z-[100] mx-auto h-full w-screen translate-y-[-100%] bg-white pt-[8rem] opacity-0 transition-all duration-500 ease-in-out laptop:hidden",
				isOpen
					? "translate-y-0 overflow-y-auto opacity-100"
					: "pointer-events-none",
			)}
		>
			<div className="container mx-auto mt-[3.25rem] flex h-[calc(100vh-11.25rem)] flex-col items-center justify-between pb-11">
				<Navigation className="items-center space-y-12" />
				<Socials />
			</div>
		</div>
	);
};
