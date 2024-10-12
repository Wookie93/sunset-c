"use client";

import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PriceItem } from "@/components/PriceItem";
import React, { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper/types";
import { SectionTitle } from "@/components/SectionTitle";
import { Description } from "@/components/Description";
import { clsx } from "clsx";
import { RoundedButton } from "@/components/RoundedButton";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import "swiper/css";
import { ContentfulButton } from "@/types/contefulTypes";

interface PricingModuleProps {
	description:{
		title: string;
		description: string;
	}
	pricingData:{
		name:string;
		date:string;
		price:number;
		time:string;
		features:string[]; 
		buttonRef:ContentfulButton
	}[]
}

export const Pricing = ({description, pricingData}: PricingModuleProps) => {
	const swiperRef = useRef<SwiperType>();
	const swiperInstanceRef = useRef<SwiperType>();
	const [swiperActiveIndex, setSwiperActiveIndex] = useState(0);
	const [swiperSlidesCount, setSwiperSlidesCount] = useState(0);
	return (
		<>
			<div className="grid grid-cols-12">
				<div className="col-span-12 tablet:col-span-4">
					<div className="space-y-8">
						<SectionTitle level={3}>{description.title}</SectionTitle>
						<Description className="text-gray-600">
						{description.description}
						</Description>
					</div>
				</div>
				<div className="group col-span-12 mt-[3.125rem] flex items-center justify-center tablet:col-span-8 tablet:mt-0 tablet:items-end tablet:justify-end">
					<div
						slot="navigation"
						className={clsx(
							"z-50 flex flex-row justify-end space-x-3 laptop:transition-opacity laptop:duration-500 laptop:group-hover:opacity-100",
						)}
					>
						<RoundedButton
							slot="prev-button"
							onClick={() => swiperRef.current?.slidePrev()}
							aria-label="Poprzedni"
							className={clsx(
								"text-gray-700 laptop:duration-500 laptop:hover:text-white",
								{ "laptop:!opacity-50": swiperActiveIndex === 0 },
							)}
						>
							<IconChevronLeft size={32} stroke={2} />
						</RoundedButton>
						<RoundedButton
							slot="next-button"
							onClick={() => swiperRef.current?.slideNext()}
							aria-label="Następny"
							className={clsx(
								"text-gray-700 laptop:duration-500 laptop:hover:text-white",
								{
									"laptop:!opacity-50":
										swiperInstanceRef.current &&
										swiperActiveIndex ===
											swiperSlidesCount -
												swiperInstanceRef.current.slidesPerViewDynamic(),
								},
							)}
						>
							<IconChevronRight size={32} stroke={2} />
						</RoundedButton>
					</div>
				</div>
			</div>
			<div className="mt-8 tablet:mt-16">
				<Swiper
					init={false}
					modules={[FreeMode, Navigation]}
					onBeforeInit={(swiper) => {
						swiperRef.current = swiper;
					}}
					className="w-full max-w-full !overflow-visible"
					freeMode
					spaceBetween={20}
					slidesPerView={1}
					breakpoints={{
						601: {
							spaceBetween: 10,
							slidesPerView: 2,
						},
						768: {
							spaceBetween: 20,
							slidesPerView: 3,
						},
						1281: {
							spaceBetween: 40,
							slidesPerView: 4,
						},
					}}
					onSlideChange={(swiper) => {
						swiperInstanceRef.current = swiper;
						setSwiperActiveIndex(swiper.activeIndex);
						setSwiperSlidesCount(swiper.slides.length);
					}}
				>
					{pricingData.map((priceItem, index) => {
						return (
							<SwiperSlide key={index}>
								<PriceItem
									title={priceItem.date}
									price={priceItem.price}
									hourTitle={priceItem.time}
									priceListTerms={priceItem.features}
									button={priceItem.buttonRef}
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</>
	);
};
