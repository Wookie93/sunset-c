import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatMoney(amount: number, currency = "PLN") {
	return new Intl.NumberFormat("pl-PL", {
		style: "currency",
		maximumFractionDigits: 0,
		currency,
	}).format(amount);
}


  
export function groupByTypename(items:any = []) {
	return items.reduce((acc:any, item:any) => {
	  const typename = item.typename || item.__typename;
	  if (typename) {
		if (!acc[typename]) {
		  acc[typename] = [];
		}
		acc[typename].push(item);
	  }
	  return acc;
	}, {});
  }