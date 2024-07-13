import { Hero } from "@/features/homepage";
import NextImage from "next/image";
import {
	IconCalendarCheck,
	IconHeadset,
	IconHomeHeart,
	IconMessageDots,
	IconSquareKey,
} from "@tabler/icons-react";
import { Description } from "@/components/Description";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { Title } from "@/components/Title";
import { ButtonLink } from "@/components/ButtonLink";
import { PlayButton } from "@/components/PlayButton";
import { CallToAction } from "@/features/call-to-action";
import { ContactSection } from "@/features/contact-section";

export default function Home() {
	return (
		<>
			<Hero />
			<Section className="mx-auto tablet:container max-tablet:pb-0">
				<div className="grid laptop:grid-cols-12">
					<div className="content-center space-y-6 px-5 laptop:col-span-5 laptop:col-start-1 laptop:space-y-12 laptop:px-0">
						<SectionTitle level={3}>
							Niezapomniany pobyt w<br /> Sunset House
						</SectionTitle>
						<div className="flex max-w-[28.125rem] flex-row space-x-6">
							<IconHomeHeart size={45} className="text-main-gold" stroke={2} />
							<div className="flex flex-col space-y-2">
								<Title>Komfort na najwyższym poziomie</Title>
								<Description className="text-gray-600">
									Wygodne meble, przestronne pokoje i nowoczesne udogodnienia
									sprawią, że poczujesz się jak w domu.
								</Description>
							</div>
						</div>
						<div className="flex max-w-[28.125rem] flex-row space-x-6">
							<IconHeadset size={45} className="text-main-gold" stroke={2} />
							<div className="flex flex-col space-y-2">
								<Title>Profesjonalna obsługa klienta</Title>
								<Description className="text-gray-600">
									Zadbamy o wszystkie Twoje potrzeby, abyś mógł skupić się na
									relaksie i wypoczynku.
								</Description>
							</div>
						</div>
					</div>
					<div className="col-span-1 pt-[3.125rem] tablet:pt-0 laptop:col-span-7 laptop:col-start-7">
						<div className="relative h-lvh max-h-[21.875rem] laptop:max-h-[32.75rem]">
							<NextImage
								fill
								src="https://res.cloudinary.com/dstimijog/image/upload/v1719667539/sunset-house/about_l8sf8k.jpg"
								alt="O domku"
								sizes="27.033vw"
							/>
						</div>
					</div>
				</div>
			</Section>

			<Section className="bg-gray-100">
				<div className="container mx-auto">
					<div className="mb-12 flex justify-center laptop:mb-20">
						<SectionTitle level={3} className="max-w-[21.875rem] text-center">
							Jak wynająć nasz uroczy domek letniskowy?
						</SectionTitle>
					</div>
					<div className="grid grid-cols-1 laptop:grid-cols-3 laptop:space-x-10">
						<div className="space-y-6 p-6">
							<IconCalendarCheck
								size={45}
								className="text-main-gold"
								stroke={2}
							/>
							<div className="space-y-2">
								<Title>Rezerwacja online w kilku prostych krokach</Title>
								<Description className="text-gray-600">
									Wybierz dogodny termin i długość pobytu, a następnie dokonaj
									płatności.
								</Description>
							</div>
						</div>

						<div className="space-y-6 p-6">
							<IconMessageDots
								size={45}
								className="text-main-gold"
								stroke={2}
							/>
							<div className="space-y-2">
								<Title>
									Sprawdzanie dostępności i potwierdzenie rezerwacji
								</Title>
								<Description className="text-gray-600">
									Po dokonaniu rezerwacji otrzymasz potwierdzenie i informacje
									dotyczące dostępu do domku.
								</Description>
							</div>
						</div>

						<div className="space-y-6 p-6">
							<IconSquareKey size={45} className="text-main-gold" stroke={2} />
							<div className="space-y-2">
								<Title>Przyjazd i zameldowanie</Title>
								<Description className="text-gray-600">
									Po przyjeździe do domku zostaniesz serdecznie powitany i
									zameldowany.
								</Description>
							</div>
						</div>
					</div>
					<div className="mt-10 flex flex-col items-center justify-center max-tablet:space-y-4 tablet:flex-row tablet:space-x-6">
						<ButtonLink type="bordered" href="/">
							Dowiedz się więcej
						</ButtonLink>
						<ButtonLink type="primary" href="/">
							Zarezerwuj teraz
						</ButtonLink>
					</div>
				</div>
			</Section>

			<Section className="mx-auto grid items-center tablet:container max-tablet:pb-0 laptop:grid-cols-12">
				<div className="col-span-1 max-tablet:order-2 max-tablet:pt-[3.125rem] tablet:col-span-6">
					<div className="relative flex h-lvh max-h-[24.375rem] items-center justify-center bg-gray-800 laptop:max-h-[37.75rem]">
						<NextImage
							fill
							src="https://res.cloudinary.com/dstimijog/image/upload/v1720267465/sunset-house/video_enx4b7.jpg"
							alt="Piękno przyrody i jazda na rowerze"
							sizes="27.033vw"
							className="opacity-30 mix-blend-hard-light"
						/>
						<PlayButton />
					</div>
				</div>
				<div className="col-span-1 space-y-12 max-tablet:order-1 max-tablet:px-5 tablet:col-span-5 tablet:col-start-8">
					<SectionTitle level={3}>
						Odkryj piękno przyrody w naszym wyjątkowym domku
					</SectionTitle>
					<div className="space-y-10">
						<Description className="text-gray-600">
							Sunset House to idealne miejsce na relaksujący pobyt z rodziną i
							przyjaciółmi. Nasz profesjonalny zespół zapewnia doskonałą
							obsługę, a okolica obfituje w liczne atrakcje turystyczne.
						</Description>
						<div>
							<Title>Atrakcje</Title>
							<Description className="text-gray-600">
								Zwiedzaj malownicze okolice, delektuj się lokalną kuchnią i
								ciesz się przyrodą.
							</Description>
						</div>
						<div>
							<Title>Dostępność</Title>
							<Description className="text-gray-600">
								Wszystkie atrakcje turystyczne są łatwo dostępne dla naszych
								gości.
							</Description>
						</div>
					</div>
				</div>
			</Section>

			<CallToAction
				buttonHref="/"
				title="Zarezerwuj pobyt w Sunset House"
				description="Odkryj urok Poreby Wielkiej i zatrzymaj się w naszym urokliwym domku letniskowym."
				buttonText="Zarezerwuj teraz"
			/>

			<Section className="container mx-auto">
				<div className="space-y-2">
					<SectionTitle
						level={3}
						className="after:bottom-1.5 after:top-auto after:max-w-32"
					>
						Nasz zespół
					</SectionTitle>
					<Description className="text-gray-600">
						Dbamy o komfort i wygodę naszych gości.
					</Description>
				</div>
				<div className="mt-16 grid grid-cols-1 gap-10 tablet:grid-cols-2">
					<div className="space-y-4">
						<div className="relative h-lvh max-h-[12.5rem] overflow-hidden tablet:max-h-[18.75rem]">
							<NextImage
								src="https://res.cloudinary.com/dstimijog/image/upload/v1720271216/sunset-house/team_a9iqks.jpg"
								alt="Zespoły Sunset House"
								fill
								sizes="22.004vw"
							/>
						</div>
						<Title>Adrian</Title>
						<Description className="text-gray-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci
							phasellus egestas tellus rutrum tellus pellentesque eu.
							Scelerisque purus semper eget duis.
						</Description>
					</div>
					<div className="space-y-4">
						<div className="relative h-lvh max-h-[12.5rem] overflow-hidden tablet:max-h-[18.75rem]">
							<NextImage
								src="https://res.cloudinary.com/dstimijog/image/upload/v1720271216/sunset-house/team_a9iqks.jpg"
								alt="Zespoły Sunset House"
								fill
								sizes="22.004vw"
							/>
						</div>
						<Title>Agnieszka</Title>
						<Description className="text-gray-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci
							phasellus egestas tellus rutrum tellus pellentesque eu.
							Scelerisque purus semper eget duis.
						</Description>
					</div>
				</div>
			</Section>

			<ContactSection />
		</>
	);
}
