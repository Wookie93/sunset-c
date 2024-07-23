import { Skeleton } from "@/components/Skeleton";

export const ContentCardSkeleton = () => {
	return (
		<div className="ease-[ease-in-out] md:text-start flex h-[600px] w-full cursor-pointer flex-col border border-border p-3 text-center shadow-[rgba(0,0,0,0.24)_0px_3px_8px] transition-all duration-200 hover:scale-105 hover:bg-accent">
			<Skeleton className="mb-4 h-40 w-full rounded-md" />
			<Skeleton className="md:self-start h-6 w-3/4 self-center" />
			<Skeleton className="md:self-start mt-2.5 h-4 w-1/2 self-center" />
			<div className="mt-2.5 flex flex-col gap-1.5">
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-5/6" />
			</div>
			<Skeleton className="mt-auto h-10 w-full" />
		</div>
	);
};

export const ContentCardSkeletonList = () => {
	return (
		<div className="md:columns-2 lg:columns-3 w-full columns-1 2xl:columns-4">
			{Array.from({ length: 8 }).map((_, i) => (
				<ContentCardSkeleton key={i} />
			))}
		</div>
	);
};
