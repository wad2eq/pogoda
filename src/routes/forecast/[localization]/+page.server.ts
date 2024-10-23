import type { Main } from '$lib/types/GoogleCords.js';
import { get_part_day } from '$lib/utils/time_utils.js';
import { get_forecast } from '$lib/utils/fetch_data.js';
//TODO: remove
// import compact_forecast from '$lib/data/yr_compact_forecast_dumy.json';
import type { Timesery } from '$lib/types/compact_forecast.js';

export const load = async ({ fetch, params }) => {
	//TODO: przenieść do ENV
	const api_key = 'AIzaSyDQ52jw_XuyE7g9z6x5n1BFHFJ9pM4KEWs';

	if (params.localization) {
		const geocordinates = await fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?address=Warszawa,Pl&key=${api_key}`
		);
		const geo_cordinates = (await geocordinates.json()) as Main;
		const { lat, lng } = geo_cordinates.results[0].geometry.location;
		console.log('geo_cordinates =>', geo_cordinates.results[0].geometry.location);
		//warsaw GEO localisation
		const forecast = await get_forecast(lat, lng);

		//Zapisać to lepiej

		const my_obj = {} as Timesery;
		await forecast.properties.timeseries.map((item: Timesery) => {
			get_part_day(item, my_obj);
		});

		if (geo_cordinates.status === 'OK') {
			// console.log(geo_cordinates.results[0].geometry.location);
			return {
				location: geo_cordinates.results[0].geometry.location,
				status: geo_cordinates.status,
				weather_data: my_obj
			};
		} else {
			console.error('Error ');
		}
	}
};
