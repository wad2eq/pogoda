import { json } from '@sveltejs/kit';
import type { PageServerData } from '../$types';

export const load: Promise<PageServerData> = async ({ url, fetch }) => {
	// Obsłużyć null
	// obsłuzuć brak lokalizacji - może coś podpowiedzieć

	//Pobierz z google places
	const googleAPI = 'AIzaSyDQ52jw_XuyE7g9z6x5n1BFHFJ9pM4KEWs';
	const city = 'Gdańsk';
	const google_places_api = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${city}&types=(cities)&key=${googleAPI}`;
	//maps.googleapis.com/maps/api/place/autocomplete/json?input=gda%C5%84sk&types=(cities)&key=AIzaSyDQ52jw_XuyE7g9z6x5n1BFHFJ9pM4KEWs
	https: console.log(google_places_api);
	const locationData = await fetch(google_places_api);
	const response = await locationData.json();

	return {
		location: url.searchParams.get('location'),
		response
	};
};
