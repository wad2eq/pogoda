import type { Main } from '$lib/types/compact_forecast';


export const get_forecast = async (): Promise<Main> => {
	console.log('load data');
	// if (compact_forecast.type === 'Feature') {
	// 	return compact_forecast;
	// // }
	const url =
		'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.95742329999999&lon=10.4786126';

	const specific_place_forecast_response = await fetch(url);
	const specific_place_forecast_data = await specific_place_forecast_response.json();
	// console.log('specific_place_forecast_data');
	console.log('specific_place_forecast_data');
	return specific_place_forecast_data;
};
