<script lang="ts">
	import Now from '../components/Now.svelte';
	import type { YrWeather } from '$lib/types/YrWeather';
	import type { NominatimReverse } from '$lib/types/Nominatim';
	import { locationName } from '../store/locationName';
	import { error } from '@sveltejs/kit';
	import WeatherDataTable from '../components/WeatherDataTable.svelte';

	let LOCATION = { name: 'Vormedal', lat: 59.355091, lng: 5.323378 }; // Vormedal coordinates

	async function _fetch(url: string): Promise<any> {
		const result = await fetch(url, {
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		})
			.then((response) => response.json())
			.catch((error) => {
				console.log('To nie działa ', error);
			});
		return result;
	}

	async function _getNameFromCoordinates(lat: number, lon: number): Promise<NominatimReverse> {
		const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
		const result: Promise<NominatimReverse> = await _fetch(url);
		console.log(result);
		return result;
	}

	async function getNameFromCoordinates(lat: number, lon: number) {
		const result = await _getNameFromCoordinates(lat, lon);

		if (result.address.city) {
			return result.address.city;
		} else if (result.address.village) {
			return result.address.village;
		}
		return 'Oslo';
	}

	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(async (location) => {
				LOCATION = {
					name: await getNameFromCoordinates(location.coords.latitude, location.coords.longitude),
					lat: location.coords.latitude,
					lng: location.coords.longitude
				};
				locationName.set(LOCATION.name);
			});
			console.log('Podana lokalizacja', LOCATION);
		} else {
			alert('Could not retrive location');
		}
	}
</script>

<main class="container">
	<button class="button green flex gap-2" on:click={getLocation} type="button">
		<span>📍</span>
		Znajdz lokalizację
	</button>
	{LOCATION.name}
	<WeatherDataTable WhetherData=>
</main>
