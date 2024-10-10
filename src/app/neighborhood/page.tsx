import { Baner } from "@/components/Baner";
import React from "react";
import { CallToAction } from "@/features/call-to-action";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { Description } from "@/components/Description";
import NextImage from "next/image";
import dynamic from "next/dynamic";

const Map = dynamic(() => import('@/features/map/index'), { ssr: false });

const NeighborhoodPage = () => {
	return (
		<>
			<Baner
				title="Okolica"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit euismod in pellentesque massa placerat."
			/>

			<Section className="container mx-auto">
				<div className="grid tabletLg:grid-cols-12">
					<div className="order-2 content-center space-y-6 px-5 tabletLg:order-1 tabletLg:col-span-5 tabletLg:col-start-1 tabletLg:px-0">
						<SectionTitle level={3}>Odkryj Gorce</SectionTitle>
						<Description className="text-gray-600">
							Gorce to wyjątkowo urokliwe góry. Jest tu spokojniej i ciszej niż
							na tatrzańskich szlakach. Jeśli spojrzycie na Gorce z góry, ich
							układ przypomina rozgwiazdę. Jej sercem jest najwyższy szczyt –
							Turbacz. Noclegi w naszych domkach przy Czarnym Szlaku pozwalają
							doświadczyć gorczańskiej przyrody (żyją tu m.in. objęte ochroną
							rysie i głuszce). W miejscowościach u podnóża Gorców znajdują się
							zaś malownicze drewniane kościółki, pochodzące jeszcze z czasów
							średniowiecza (m.in. w Dębnie i w Łopusznej).
						</Description>
					</div>
					<div className="order-1 col-span-1 pb-[3.125rem] tabletLg:order-2 tabletLg:col-span-6 tabletLg:col-start-7 tabletLg:pb-0">
						<div className="relative h-lvh max-h-[21.875rem] laptop:max-h-[40.625rem]">
							<NextImage
								fill
								src="https://res.cloudinary.com/dstimijog/image/upload/v1722284815/sunset-house/okolica01_kigxyk.jpg"
								alt="Odkryj Gorce"
								sizes="27.033vw"
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</Section>

			<Section className="bg-gray-100">
				<div className="container mx-auto grid tabletLg:grid-cols-12">
					<div className="order-2 content-center space-y-6 px-5 tabletLg:col-span-5 tabletLg:col-start-8 tabletLg:px-0">
						<SectionTitle level={3}>Narty lub rower</SectionTitle>
						<Description className="text-gray-600">
							Z naszych drewnianych domków w Gorcach bliziutko jest na biegówki.
							Z okien sypialni możecie dostrzec trasy Centrum Narciarstwa
							Biegowego w Klikuszowej (naśnieżane i oświetlone po zmroku), a w
							ciągu ok. 15 min dojedziecie do Obidowej, gdzie zaczyna się
							najładniejsza trasa biegowa na Turbacz. Jeśli zaś wolicie rowery,
							Gorce to raj dla rowerów MTB (najlepiej fulli). Na szosie czy
							trekkingu możecie wybrać się na nieco dalszą wycieczkę malowniczą
							trasą rowerową Velo Czorsztyn lub fragmentem rowerowego Szlaku
							wokół Tatr.
						</Description>
					</div>
					<div className="order-1 col-span-1 pb-[3.125rem] tabletLg:col-span-6 tabletLg:col-start-1 tabletLg:pb-0">
						<div className="relative h-lvh max-h-[21.875rem] laptop:max-h-[40.625rem]">
							<NextImage
								fill
								src="https://res.cloudinary.com/dstimijog/image/upload/v1722284815/sunset-house/okolica02_krai3g.jpg"
								alt="Narty lub rower"
								sizes="27.033vw"
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</Section>

			<Section className="container mx-auto">
				<div className="grid tabletLg:grid-cols-12">
					<div className="order-2 content-center space-y-6 px-5 tabletLg:order-1 tabletLg:col-span-5 tabletLg:col-start-1 tabletLg:px-0">
						<SectionTitle level={3}>Relaks na termach</SectionTitle>
						<Description className="text-gray-600">
							A może tak relaks w ciepłej wodzie z wnętrza ziemi? Na Podhalu
							mamy aż 6 kompleksów termalnych! Dwa najbliższe (Termy Szaflary i
							Termy Gorący Potok) znajdują się w odległości 15 km od osady.
							Nieco dalej są eleganckie Termy Bukovina (26 km), Terma Bania z
							wieloma atrakcjami dla rodziny (19 km), Aqua Park w Zakopanem z
							basenem balneologicznym (28 km) i największe na Podhalu
							Chochołowskie Termy (30 km). W większości z nich możecie podziwiać
							widok na Tatry.
						</Description>
					</div>
					<div className="order-1 col-span-1 pb-[3.125rem] tabletLg:order-2 tabletLg:col-span-6 tabletLg:col-start-7 tabletLg:pb-0">
						<div className="relative h-lvh max-h-[21.875rem] laptop:max-h-[40.625rem]">
							<NextImage
								fill
								src="https://res.cloudinary.com/dstimijog/image/upload/v1722284815/sunset-house/okolica03_epixra.jpg"
								alt="Relaks na termach"
								sizes="27.033vw"
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</Section>

			<Section className="bg-gray-100">
				<div className="container mx-auto grid tabletLg:grid-cols-12">
					<div className="order-2 content-center space-y-6 px-5 tabletLg:col-span-5 tabletLg:col-start-8 tabletLg:px-0">
						<SectionTitle level={3}>Co jeszcze?</SectionTitle>
						<Description className="text-gray-600">
							W bliskiej i nieco dalszej okolicy czekają wyciągi narciarskie,
							malowniczy Spływ Przełomem Dunajca na flisackich tratwach,
							średniowieczne zamki nad Jeziorem Czorsztyńskim, Dwór w Łopusznej
							(filia Muzeum Tatrzańskiego), najlepsze na Podhalu lody w Nowym
							Targu czy tłoczne Zakopane. Możecie też wybrać się jednym z wielu
							szlaków tematycznych, np. Małopolskim Szlakiem Oscypkowym czy
							Szlakiem Architektury Drewnianej. I crème de la crème: kulig z
							pochodniami, który przyjedzie po Was pod sam domek!
						</Description>
					</div>
					<div className="order-1 col-span-1 pb-[3.125rem] tabletLg:col-span-6 tabletLg:col-start-1 tabletLg:pb-0">
						<div className="relative h-lvh max-h-[21.875rem] laptop:max-h-[40.625rem]">
							<NextImage
								fill
								src="https://res.cloudinary.com/dstimijog/image/upload/v1722284815/sunset-house/okolica04_gnvr34.jpg"
								alt="Narty lub rower"
								sizes="27.033vw"
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</Section>

			<Map />

			<CallToAction
				buttonHref="/"
				title="Zarezerwuj pobyt w Sunset House"
				description="Odkryj urok Poreby Wielkiej i zatrzymaj się w naszym urokliwym domku letniskowym."
				buttonText="Zarezerwuj teraz"
			/>
		</>
	);
};

export default NeighborhoodPage;
