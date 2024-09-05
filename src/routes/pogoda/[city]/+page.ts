import type { Main } from '$lib/types/Google.js';
import type { YrWeather } from '$lib/types/YrWeather.js';
import { error } from '@sveltejs/kit';

// const api_url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lng}`;

//TODO: jeżeli miasto nie zostanie znalezione to server zwróci error

export async function load({ params, fetch }) {
	// TODO: add api key to the env
	const { city } = params;
	console.log(city);
	const API_KEY = 'AIzaSyDQ52jw_XuyE7g9z6x5n1BFHFJ9pM4KEWs';
	const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city},No&key=${API_KEY}`;
	// TODO: parametry
	const data: Promise<Main> = await fetch(url);
	const result: Main = await data.json();
	const { lat, lng } = result.results[0].geometry.location;
	console.log(lat, lng);
	const weatherData: Promise<YrWeather> = await fetch(
		`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lng}`
	);
	const weather: YrWeather = await weatherData.json();
	console.log(weather.properties.timeseries[0]);

	return { weather: weather.properties.timeseries };
	error(404, 'Not found');
}
