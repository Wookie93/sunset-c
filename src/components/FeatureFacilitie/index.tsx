import React from "react";

type FeatureFacilitieProps = {
	icon: React.ReactNode;
	title: string;
	feature: string;
};

export const FeatureFacilitie = ({
	icon,
	title,
	feature,
}: FeatureFacilitieProps) => {
	return (
		<div className="flex flex-row items-center space-x-8">
			{icon}
			<div className="flex flex-col">
				<p className="text-base font-normal text-gray-600">{title}</p>
				<p className="text-xl font-semibold text-gray-900">{feature}</p>
			</div>
		</div>
	);
};
