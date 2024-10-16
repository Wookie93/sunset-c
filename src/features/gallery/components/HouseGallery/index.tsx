"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination } from "swiper/modules";
import NextImage from "next/image";
import { clsx } from "clsx";

type slideType = {
	url:string;
	title:string;
}

interface HouseGalleryProps{
	data:slideType[]
}

export const HouseGallery = ({data}: HouseGalleryProps) => {
	return (
		<Swiper
			modules={[Pagination]}
			spaceBetween={1}
			slidesPerView={1}
			breakpoints={{
				601: {
					spaceBetween: 10,
					slidesPerView: 2,
				},
				1025: {
					spaceBetween: 20,
					slidesPerView: 3,
				},
				1281: {
					spaceBetween: 30,
					slidesPerView: 4,
				},
			}}
			centeredSlides
			grabCursor
			navigation
			pagination={{ clickable: true, dynamicBullets: true }}
		>
			{data.map((slide: slideType, index:number) => (
				<SwiperSlide key={index} >
					{({ isActive }) => (
						<div className="relative min-h-[19.75rem] bg-gray-300">
							<NextImage
								fill
								src={slide.url}
								alt={slide.title}
								className={clsx({
									"object-cover": true,
									"mix-blend-soft-light grayscale": !isActive,
								})}
								style={{
									transform: "translate3d(0px, 0px, 0px)",
								}}
							/>
						</div>
					)}
				</SwiperSlide>
			))}

		</Swiper>
	);
};
