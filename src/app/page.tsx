import { Hero } from "@/features/homepage";
import NextImage from "next/image";
import { IconHomeHeart } from "@tabler/icons-react";
import { Description } from "@/components/Description";

export default function Home() {
	return (
		<>
			<Hero />
			<section className="container mx-auto py-[6.25rem]">
				<div className="grid grid-cols-12">
					<div className="col-span-5 col-start-1 content-center space-y-12">
						<h3 className="relative text-3xl font-bold text-gray-900 after:absolute after:left-0 after:top-1/3 after:z-[-1] after:h-1.5 after:w-full after:max-w-64 after:bg-main-gold/60">
							Niezapomniany pobyt w<br /> Sunset House
						</h3>
						<div className="flex flex-row space-x-6">
							<IconHomeHeart size={45} className="text-main-gold" stroke={2} />
							<div className="flex flex-col space-y-2">
								<h4 className="text-xl font-semibold text-gray-900">
									Komfort na najwyższym poziomie
								</h4>
								<Description className="text-gray-600">
									Wygodne meble, przestronne pokoje i nowoczesne udogodnienia
									sprawią, że poczujesz się jak w domu.
								</Description>
							</div>
						</div>
					</div>
					<div className="col-span-7 col-start-7">
						<div className="relative h-lvh max-h-[32.75rem]">
							<NextImage
								fill
								src="https://res.cloudinary.com/dstimijog/image/upload/v1719667539/sunset-house/about_l8sf8k.jpg"
								alt="O domku"
								sizes="27.033vw"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
