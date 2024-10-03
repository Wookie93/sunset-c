import { SectionTitle } from "@/components/SectionTitle";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { ButtonLink } from "@/components/ButtonLink";
import React from "react";
import { PriceItemProps } from "@/types";
import { formatMoney } from "@/lib/utils";

export const PriceItem = ({
	title,
	price,
	hourTitle,
	priceListTerms,
	button
}: PriceItemProps) => {
	return (
		<div className="flex min-h-[28.625rem] flex-col justify-between rounded-lg border border-gray-200 p-6 tablet:min-h-[35.625rem]">
			<div className="space-y-6">
				<div className="space-y-3 text-center">
					<SectionTitle
						level={5}
						className="!text-sm font-normal !text-gray-600"
					>
						{title}
					</SectionTitle>
					<div className="space-y-1">
						<p className="text-3xl font-bold text-gray-900">
							{formatMoney(price)}
						</p>
						<span className="block text-base font-normal text-gray-600">
							{hourTitle}
						</span>
					</div>
				</div>
				<ul className="space-y-2 text-left text-base">
					{priceListTerms.map((term,index) => (
						<li key={index} className="flex flex-row items-center space-x-3">
							<IconCircleCheckFilled size={16} className="text-lion" />
							<span>{term}</span>
						</li>
					))}
				</ul>
			</div>
			<div className="flex justify-center">
				<ButtonLink href={button.linkTo.slug ?? "/"} type="darken">
					{button.textOnButton}
				</ButtonLink>
			</div>
		</div>
	);
};
