"use client";

import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PriceItem } from "@/components/PriceItem";
import React, { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper/types";
import { pricing } from "@/app/pricing/mock";
import { SectionTitle } from "@/components/SectionTitle";
import { Description } from "@/components/Description";
import { clsx } from "clsx";
import { RoundedButton } from "@/components/RoundedButton";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import "swiper/css";

export const Pricing = () => {
	const swiperRef = useRef<SwiperType>();
	const swiperInstanceRef = useRef<SwiperType>();
	const [swiperActiveIndex, setSwiperActiveIndex] = useState(0);
	const [swiperSlidesCount, setSwiperSlidesCount] = useState(0);
	return (
		<>
			<div className="grid grid-cols-12">
				<div className="col-span-4">
					<div className="space-y-8">
						<SectionTitle level={3}>Wybierz rezerwacje</SectionTitle>
						<Description className="text-gray-600">
							A short paragraph describing your pricing plans. Provide how
							subscription or purchase of your service/product will benefit your
							customer.
						</Description>
					</div>
				</div>
				<div className="group col-span-8 flex items-end justify-end">
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
			<div className="mt-16">
				<Swiper
					init={false}
					modules={[FreeMode, Navigation]}
					onBeforeInit={(swiper) => {
						swiperRef.current = swiper;
					}}
					className="w-full max-w-full !overflow-visible"
					freeMode
					spaceBetween={1}
					slidesPerView={2}
					breakpoints={{
						768: {
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
					{pricing.map((priceItem) => {
						return (
							<SwiperSlide key={priceItem.id}>
								<PriceItem
									title={priceItem.title}
									price={priceItem.price}
									hourTitle={priceItem.hourTitle}
									priceListTerms={priceItem.priceListTerms}
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</>
	);
};
