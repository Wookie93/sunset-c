import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import client from "./contentful";

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

  interface PageData {
	page: {
	  slug: string;
	  modulesCollection: {
		items: (Record<string, any> | null)[];
	  };
	}; 
  }

  export async function fetchData<T extends PageData>(query: string): Promise<T['page'] | null>{
	try {
	  const data = await client.request<T>(query);
  
	  // Filter out null entries from the modulesCollection
	  const filteredPage = {
		...data.page,
		modulesCollection: {
		  ...data.page.modulesCollection,
		  items: data.page.modulesCollection.items.filter((item) => item !== null),
		},
	  };
  
	  return filteredPage;
  
	} catch (error:any) {
	  if (error.response?.errors?.[0]?.extensions?.contentful?.code === 'UNRESOLVABLE_LINK') {
		console.error('Unresolvable link detected, returning partial data', error);
  
		// Extract the partial data from the error response
		const partialData = error.response?.data?.page || {};
  
		// Filter out null entries from the modulesCollection if partial data exists
		const filteredPage = {
		  ...partialData,
		  modulesCollection: {
			...partialData.modulesCollection,
			items: partialData.modulesCollection?.items?.filter((item:any)  => item !== null) || [],
		  },
		};
  
		return filteredPage; 
	  }
  
	  throw error; 
	}
  }
