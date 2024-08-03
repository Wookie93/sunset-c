"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination } from "swiper/modules";
import NextImage from "next/image";
import { clsx } from "clsx";

export const HouseGallery = () => {
	return (
		<Swiper
			modules={[Pagination]}
			spaceBetween={40}
			slidesPerView={3}
			centeredSlides
			grabCursor
			navigation
			pagination={{ clickable: true, dynamicBullets: true }}
			onSlideChange={() => console.log("slide change")}
			onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide>
				{({ isActive }) => (
					<div className="relative min-h-[19.75rem] bg-gray-300">
						<NextImage
							fill
							src="https://res.cloudinary.com/dstimijog/image/upload/v1719667539/sunset-house/about_l8sf8k.jpg"
							alt="O domku"
							sizes="27.033vw"
							className={clsx({
								"object-cover": true,
								"mix-blend-soft-light grayscale": !isActive,
							})}
						/>
					</div>
				)}
			</SwiperSlide>
			<SwiperSlide>
				{({ isActive }) => (
					<div className="relative min-h-[19.75rem] bg-gray-300">
						<NextImage
							fill
							src="https://res.cloudinary.com/dstimijog/image/upload/v1719667539/sunset-house/about_l8sf8k.jpg"
							alt="O domku"
							sizes="27.033vw"
							className={clsx({
								"object-cover": true,
								"mix-blend-soft-light grayscale": !isActive,
							})}
						/>
					</div>
				)}
			</SwiperSlide>
			<SwiperSlide>
				{({ isActive }) => (
					<div className="relative min-h-[19.75rem] bg-gray-300">
						<NextImage
							fill
							src="https://res.cloudinary.com/dstimijog/image/upload/v1719667539/sunset-house/about_l8sf8k.jpg"
							alt="O domku"
							sizes="27.033vw"
							className={clsx({
								"object-cover": true,
								"mix-blend-soft-light grayscale": !isActive,
							})}
						/>
					</div>
				)}
			</SwiperSlide>
			<SwiperSlide>
				{({ isActive }) => (
					<div className="relative min-h-[19.75rem] bg-gray-300">
						<NextImage
							fill
							src="https://res.cloudinary.com/dstimijog/image/upload/v1719667539/sunset-house/about_l8sf8k.jpg"
							alt="O domku"
							sizes="27.033vw"
							className={clsx({
								"object-cover": true,
								"mix-blend-soft-light grayscale": !isActive,
							})}
						/>
					</div>
				)}
			</SwiperSlide>
		</Swiper>
	);
};
