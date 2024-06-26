export interface Main {
	predictions: Prediction[];
	status: string;
}

export interface Prediction {
	description: string;
	matched_substrings: MatchedSubstring[];
	place_id: string;
	reference: string;
	structured_formatting: StructuredFormatting;
	terms: Term[];
	types: string[];
}

export interface MatchedSubstring {
	length: number;
	offset: number;
}

export interface StructuredFormatting {
	main_text: string;
	main_text_matched_substrings: MatchedSubstring[];
	secondary_text: string;
}

export interface Term {
	offset: number;
	value: string;
}
