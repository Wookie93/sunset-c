import { TypedDocumentString } from "@/gql/graphql";

type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };

export const executeQuery = async <TResult, TVariables>({
	query,
	variables,
	cache,
	next,
	headers,
}: {
	query: TypedDocumentString<TResult, TVariables>;
	cache?: RequestCache;
	headers?: HeadersInit;
	next?: NextFetchRequestConfig | undefined;
} & (TVariables extends { [key: string]: never }
	? { variables?: never }
	: { variables: TVariables })): Promise<TResult> => {
	if (!process.env.NEXT_PUBLIC_API_URL) {
		throw TypeError("NEXT_PUBLIC_API_URL is not defined");
	}

	const res = await fetch(process.env.NEXT_PUBLIC_API_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: {
			...headers,
			"Content-Type": "application/json",
		},
		next,
		cache,
	});
	const grapqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (grapqlResponse.errors) {
		throw TypeError(`GraphQl Error`, {
			cause: grapqlResponse.errors,
		});
	}

	return grapqlResponse.data;
};
