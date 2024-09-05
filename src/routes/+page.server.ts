import dataS from '$lib/data/geolocation.json';
import type { Main, Result, Geometry } from '$lib/types/Google';
const norvegian_cities = [
	'Oslo',
	'Tromso',
	'Stavanger',
	'Lillestrøm',
	'Kristiansand',
	'Drammen',
	'Bergen',
	'Bærum   ',
	'Asker',
	'Trondheim'
];

interface cityLocation {
	name: string;
	location: object;
}

async function getFakeGeolocaton(): Promise<cityLocation> {
	const city: Array<cityLocation> = [];
	dataS.forEach((element) => {
		if (Array.isArray(element.results) && element.results.length !== 0) {
			city.push({
				name: element.results,
				location: 'element.geometry.location'
			});
		}
	});
	return city;
}

//TODO: sprawdzić czy są geocordynanty
//TODO: adress dać do stałęj zmiennej
async function callApi(fetch, city) {
	const API_KEY = 'AIzaSyDQ52jw_XuyE7g9z6x5n1BFHFJ9pM4KEWs';
	const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city},No&key=${API_KEY}`;
	const result = await fetch(url);
	const data: Main<Result> = await result.json();
	const geomertyData: Geometry = data.results.geometry;
	console.log(data.results.geometry);
	return geomertyData;
}

export async function load() {
	getFakeGeolocaton();
	// const promieses = norvegian_cities.map((city) => callApi(city));
	// const table = await Promise.all(promieses);
	return {
		name: 'load',
		table: await getFakeGeolocaton()
	};
}
