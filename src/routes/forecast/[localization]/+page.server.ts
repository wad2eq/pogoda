import type { Main } from '$lib/types/GoogleCords.js';

export const load = async ({ fetch, params }) => {
	//TODO: przenieść do ENV
	const api_key = 'AIzaSyDQ52jw_XuyE7g9z6x5n1BFHFJ9pM4KEWs';

	if (params.localization) {
		const geocordinates = await fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?address=Warszawa,Pl&key=${api_key}`
		);

		const response = (await geocordinates.json()) as Main;

		if (response.status === 'OK') {
			// console.log(response.results[0].geometry.location);
			return {
				location: response.results[0].geometry.location,
				status: response.status
			};
		} else {
			console.error('Error ');
		}
	}
};
