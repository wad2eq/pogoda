<script lang="ts">
	import { page } from '$app/stores';

	import Hourlyforecast from '$lib/components/forecast/Hourlyforecast.svelte';
	import { get_forecast } from '$lib/utils/fetch_data';
	import * as Table from '$lib/components/ui/table';
	import { cityForcast } from '$lib/data/cityforcast';
	import type { DayInterval, LongInterval } from '$lib/types/Cityforcast';
	import type { Main } from '$lib/types/compact_forecast.js';
	import { onMount } from 'svelte';
	import TableCell from '$lib/components/ui/table/table-cell.svelte';
	import WeatherSymbol from '$lib/components/forecast/WeatherSymbol.svelte';
	// Dumy data
	import compact_forecast from '$lib/data/yr_compact_forecast_dumy.json';

	console.log(compact_forecast.properties.timeseries.length);

	export let data;
	// let forecast_data = get_forecast(); // TODO: nie chcę aby ta metoda odpalała się jeżeli status nie jest OK
	const forecast_data: Main = compact_forecast;
	console.log(forecast_data);
	// TODO: Pewnie to trzeba skasować

	// const forecast_date = get_forecast();
	// console.log(await promise.json());

	const getFormattedDate = (dateTime: Date) => {
		console.log(dateTime);
		const national = 'no-NO';
		const date = new Date(dateTime);
		// // const options = {dateStyle: 'full'};
		const options = { weekday: 'long', month: 'long', day: 'numeric' };
		const formattedDate = date.toLocaleDateString(national, options);
		return formattedDate;
	};
	// TODO: Przekazać do dialogu odpowiednie dane oszczędzając pamieć. Nie przkazywać tego samego obiektu
</script>

<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Head></Table.Head>
			<Table.Head>Night</Table.Head>
			<Table.Head>Morning</Table.Head>
			<Table.Head>Afternoon</Table.Head>
			<Table.Head>Evening</Table.Head>
			<Table.Head>Temperature</Table.Head>
			<Table.Head>Precip</Table.Head>
			<Table.Head>wind</Table.Head>
			<Table.Head>call</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each forecast_data.properties.timeseries as forecast, i}
			<Table.Row>
				<TableCell>{forecast.time}</TableCell>
				<TableCell
					><WeatherSymbol image={forecast.data.next_1_hours?.summary.symbol_code} /></TableCell
				>
				<TableCell
					><WeatherSymbol image={forecast.data.next_6_hours?.summary.symbol_code} /></TableCell
				>
				<TableCell
					><WeatherSymbol image={forecast.data.next_12_hours?.summary.symbol_code} /></TableCell
				>
				<TableCell
					><WeatherSymbol image={forecast.data.next_12_hours?.summary.symbol_code} /></TableCell
				>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
{#await forecast_data}
	<p>...data loading</p>
{/await}
