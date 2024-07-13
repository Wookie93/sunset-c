import NextImage from "next/image";
import { Heading, Socials, SunsetButton } from "@/features/homepage";
import { Button } from "@/components/ui/button";
import { IconMouse } from "@tabler/icons-react";
import { Description } from "@/components/Description";

export const Hero = () => {
	return (
		<div className="relative h-screen min-h-[40rem] bg-gray-700 max-tablet:max-h-[52.25rem]">
			<NextImage
				fill
				priority
				src="https://res.cloudinary.com/dstimijog/image/upload/v1719660072/sunset-house/image_ywbmsa.jpg"
				alt="Sunset House"
				sizes="100vw"
				className="mix-blend-soft-light grayscale"
			/>
			<div className="absolute left-12 top-1/3 hidden laptop:block">
				<Socials />
			</div>
			<div className="absolute bottom-12 left-1/2 -translate-x-1/2 transform laptop:left-12 laptop:translate-x-0">
				<Button className="flex flex-col items-center bg-transparent p-0 text-gray-100">
					<IconMouse size={30} />
					<span className="text-[10px] font-semibold uppercase text-white">
						scroll
					</span>
				</Button>
			</div>
			<div className="container relative top-1/2 mx-auto grid -translate-y-1/2 transform laptop:grid-cols-12">
				<div className="col-span-12 grid laptop:col-span-6 laptop:col-start-7 laptop:grid-cols-6">
					<div className="space-y-4 laptop:col-span-4">
						<Heading className="text-white">Witamy w Sunset House</Heading>
						<Description className="text-white">
							Odkryj urok naszej malowniczej wioski i ciesz się niezapomnianym
							pobytem w Sunset House. <br />
							Nasz profesjonalny zespół zapewni Ci doskonałą obsługę, a liczne
							atrakcje turystyczne w okolicy umilą Twój pobyt.
						</Description>
						<div className="flex flex-row space-x-8">
							<SunsetButton text="Dowiedz się więcej" />
							<SunsetButton text="Zarezerwuj teraz" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
