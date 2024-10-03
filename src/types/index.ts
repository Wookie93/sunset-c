import { ContentfulButton } from "./contefulTypes";


export type PriceItemProps = {
	id?: number;
	title: string;
	price: number;
	hourTitle: string;
	priceListTerms: string[];
	button: ContentfulButton
};
