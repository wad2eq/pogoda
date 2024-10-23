import type { Main } from '$lib/types/compact_forecast';
//59.355091
//5.323378
export const get_forecast = async (lat: number, lon: number): Promise<Main> => {
	console.log('load data');
	// if (compact_forecast.type === 'Feature') {
	// 	return compact_forecast;
	// // }
	const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`;

	const specific_place_forecast_response = await fetch(url);
	const specific_place_forecast_data = await specific_place_forecast_response.json();
	// console.log('specific_place_forecast_data');
	console.log('specific_place_forecast_data');
	return specific_place_forecast_data;
};
