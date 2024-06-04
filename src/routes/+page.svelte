<script lang="ts">
	import Now from '../components/Now.svelte';
	import type { YrWeather } from '$lib/types/YrWeather';
	import { locationName } from '../store/locationName';
	import WeatherDataTable from '../components/WeatherDataTable.svelte';

	let city = '';
	export let data;
	console.log(data);

	//TODO: te miasta powinny być zgromadzone gdzies indziej, plik?

	// TODO: dodać do reszty zapytania
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
</script>

<div class="">
	<!-- //TODO: create svelte component -->

	<div>
		<input type="text" bind:value={city} placeholder="City name" />
		{city}
		<a href="/pogoda/{city}"> Pokaż pogodę</a>
	</div>
	<!-- // <Now now={result.properties.timeseries[0]} /> -->
	<!-- // <WeatherDataTable WhetherData={result} /> -->
</div>
