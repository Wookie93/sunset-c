type PriceListTermProps = {
	id: number;
	title: string;
};

export type PriceItemProps = {
	id?: number;
	title: string;
	price: number;
	hourTitle: string;
	priceListTerms: PriceListTermProps[];
};
