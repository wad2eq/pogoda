import type { Main } from '$lib/types/GoogleCords.js';
import { get_part_day } from '$lib/utils/time_utils.js';
import compact_forecast from '$lib/data/yr_compact_forecast_dumy.json';
import type { Timesery } from '$lib/types/compact_forecast.js';

export const load = async ({ fetch, params }) => {
	//TODO: przenieść do ENV
	const api_key = 'AIzaSyDQ52jw_XuyE7g9z6x5n1BFHFJ9pM4KEWs';

	if (params.localization) {
		const geocordinates = await fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?address=Warszawa,Pl&key=${api_key}`
		);
		const response = (await geocordinates.json()) as Main;
		const my_obj = {};
		compact_forecast.properties.timeseries.map((item: Timesery) => {
			get_part_day(item, my_obj);
		});

		console.log('my object', my_obj);

		if (response.status === 'OK') {
			// console.log(response.results[0].geometry.location);
			return {
				location: response.results[0].geometry.location,
				status: response.status,
				weather_data: my_obj
			};
		} else {
			console.error('Error ');
		}
	}
};
