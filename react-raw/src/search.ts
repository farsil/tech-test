// there are other fields that are not used in this implementation
export interface SearchResult {
	title: string;
	url: string;
}

export interface SearchResponse {
	results: SearchResult[];
}

export async function search(query: string): Promise<SearchResult[]> {
	const response = await fetch(`https://help-search-api-prod.herokuapp.com/search?query=${query}`);
	const searchResponse: SearchResponse = await response.json();
	return searchResponse.results;
}