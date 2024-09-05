<script lang="ts">
	import type { YrWeather, Timeseries } from '$lib/types/YrWeather';
	import WeatherDataTable from '../../../components/WeatherDataTable.svelte';

	export let data;
</script>

to jest pogoda

<WeatherDataTable WhetherData={data.weather} />
