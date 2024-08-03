import React from "react";
import { Baner } from "@/components/Baner";
import { ContactSection } from "@/features/contact-section";
import { CallToAction } from "@/features/call-to-action";
import { Section } from "@/components/Section";
import { Pricing } from "@/features/pricing";

const PricingPage = () => {
	return (
		<>
			<Baner
				title="Cennik"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit euismod in pellentesque massa placerat."
			/>

			<Section className="overflow-hidden">
				<div className="container mx-auto">
					<Pricing />
				</div>
			</Section>

			<CallToAction
				buttonHref="/"
				title="Nie znalazłeś interesującego pakietu?"
				description="Odkryj urok Poreby Wielkiej i zatrzymaj się w naszym urokliwym domku letniskowym."
				buttonText="Przejdź do kalendarza"
			/>

			<ContactSection />
		</>
	);
};

export default PricingPage;
