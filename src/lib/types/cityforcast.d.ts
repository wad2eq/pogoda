export interface Main {
	created: Date;
	update: Date;
	uv: Uv;
	dayIntervals: DayInterval[];
	shortIntervals: ShortInterval[];
	longIntervals: LongInterval[];
	_links: Links;
}

export interface Links {
	self: Self;
}

export interface Self {
	href: string;
}

/**
 * Reprezentuje interwał dzienny z informacjami o pogodzie.
 * @property {Date} start - Początek interwału.
 * @property {Date} end - Koniec interwału.
 * @property {TwentyFourHourSymbol} twentyFourHourSymbol - Symbol dla 24-godzinnego formatu.
 * @property {TwentyFourHourSymbol[]} twelveHourSymbols - Symbole dla 12-godzinnego formatu.
 * @property {Array<TwentyFourHourSymbol | null>} sixHourSymbols - Symbole dla 6-godzinnego formatu.
 * @property {SymbolConfidence} symbolConfidence - Poziom pewności symbolu.
 * @property {DayIntervalPrecipitation} precipitation - Informacje o opadach.
 * @property {DayIntervalTemperature} temperature - Informacje o temperaturze.
 * @property {DayIntervalWind} wind - Informacje o wietrze.
 */

export interface DayInterval {
	start: Date;
	end: Date;
	twentyFourHourSymbol: TwentyFourHourSymbol;
	twelveHourSymbols: TwentyFourHourSymbol[];
	sixHourSymbols: Array<TwentyFourHourSymbol | null>;
	symbolConfidence: SymbolConfidence;
	precipitation: DayIntervalPrecipitation;
	temperature: DayIntervalTemperature;
	wind: DayIntervalWind;
}

export interface DayIntervalPrecipitation {
	value: number;
	probability: number;
}
/**
 * symbole zachmurzenia. Odpowiadają im nazwy ikon
 */
export enum TwentyFourHourSymbol {
	Cloudy = 'cloudy',
	FairDay = 'fair_day',
	FairNight = 'fair_night',
	Lightrain = 'lightrain',
	LightrainshowersDay = 'lightrainshowers_day',
	LightrainshowersNight = 'lightrainshowers_night',
	PartlycloudyDay = 'partlycloudy_day',
	PartlycloudyNight = 'partlycloudy_night',
	Rain = 'rain'
}

export enum SymbolConfidence {
	Certain = 'Certain',
	SomewhatCertain = 'SomewhatCertain',
	Uncertain = 'Uncertain'
}

export interface DayIntervalTemperature {
	value: number;
	min: number;
	max: number;
	probability?: Probability;
}

export interface Probability {
	tenPercentile: number;
	ninetyPercentile: number;
}

export interface DayIntervalWind {
	min: number;
	max: number;
	maxGust?: number;
}

export interface LongInterval {
	symbol: Symbol;
	symbolCode: SymbolCode;
	precipitation: LongIntervalPrecipitation;
	temperature: DayIntervalTemperature;
	wind: LongIntervalWind;
	feelsLike: DewPoint;
	pressure: DewPoint;
	cloudCover: CloudCover;
	humidity: DewPoint;
	dewPoint: DewPoint;
	start: Date;
	end: Date;
	nominalStart: Date;
	nominalEnd: Date;
	uvIndex?: DewPoint;
}

export interface CloudCover {
	value: number;
	high: number;
	middle: number;
	low: number;
	fog: number;
}

export interface DewPoint {
	value: number;
}

export interface LongIntervalPrecipitation {
	min: number;
	max: number;
	value: number;
	pop: number;
	probability: number;
}

export interface Symbol {
	sunup: boolean;
	n: number;
	clouds: number;
	precip: number;
	var?: Var;
	precipPhase?: PrecipPhase;
}

export enum PrecipPhase {
	Rain = 'Rain'
}

export enum Var {
	Moon = 'Moon',
	Sun = 'Sun'
}

export interface SymbolCode {
	next1Hour?: Next1Hour;
	next6Hours?: TwentyFourHourSymbol;
	next12Hours?: TwentyFourHourSymbol;
}

export enum Next1Hour {
	ClearskyDay = 'clearsky_day',
	Cloudy = 'cloudy',
	FairDay = 'fair_day',
	FairNight = 'fair_night',
	PartlycloudyDay = 'partlycloudy_day',
	PartlycloudyNight = 'partlycloudy_night'
}

export interface LongIntervalWind {
	direction: number;
	gust?: number;
	speed: number;
	probability: Probability;
}

export interface ShortInterval {
	symbol: Symbol;
	symbolCode: SymbolCode;
	precipitation: LongIntervalPrecipitation;
	temperature: ShortIntervalTemperature;
	wind: LongIntervalWind;
	feelsLike: DewPoint;
	pressure: DewPoint;
	uvIndex: DewPoint;
	cloudCover: CloudCover;
	humidity: DewPoint;
	dewPoint: DewPoint;
	start: Date;
	end: Date;
}

export interface ShortIntervalTemperature {
	value: number;
	probability: Probability;
}

export interface Uv {
	duration: Duration;
	url: string;
	displayUrl: string;
}

export interface Duration {
	days: number;
	hours: number;
}
