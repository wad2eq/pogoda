<script lang="ts">
	import { page } from '$app/stores';

	import { get_part_day } from '$lib/utils/time_utils.js';
	import Hourlyforecast from '$lib/components/forecast/Hourlyforecast.svelte';
	import * as Table from '$lib/components/ui/table';
	import { cityForcast } from '$lib/data/cityforcast';
	import type { DayInterval, LongInterval } from '$lib/types/Cityforcast';
	import type { Main, Timesery } from '$lib/types/compact_forecast.js';
	import { onMount } from 'svelte';
	import TableCell from '$lib/components/ui/table/table-cell.svelte';
	import WeatherSymbol from '$lib/components/forecast/WeatherSymbol.svelte';
	// Dumy data
	import compact_forecast from '$lib/data/yr_compact_forecast_dumy.json';

	export let data;
	const entries = Object.keys(data.weather_data);
	console.log('data');
	console.log(Object.entries(data.weather_data));

	// let forecast_data = get_forecast(); // TODO: nie chcę aby ta metoda odpalała się jeżeli status nie jest OK

	// TODO: Przekazać do dialogu odpowiednie dane oszczędzając pamieć. Nie przkazywać tego samego obiektu
</script>

<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Head>Date</Table.Head>
			<Table.Head>Night</Table.Head>
			<Table.Head>Morning</Table.Head>
			<Table.Head>Afternoon</Table.Head>
			<Table.Head>Evening</Table.Head>
			<Table.Head>Temperature</Table.Head>
			<Table.Head>Precip</Table.Head>xcxc
			<Table.Head>wind</Table.Head>
			<Table.Head>call</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each Object.entries(data.weather_data) as [key, value], i}
			<Table.Row>
				<TableCell>{key} + {i}</TableCell>
				{#if value.Night.length > 0}
					<TableCell>{value.Night[0].data?.next_6_hours}</TableCell>
				{:else}
					<TableCell>s</TableCell>
				{/if}
				{#if value.Morning.length > 0}
					<TableCell>{value.Morning[0].data?.next_6_hours}</TableCell>
				{:else}
					<TableCell>s</TableCell>
				{/if}
				{#if value.Afternoon.length > 0}
					<TableCell>{value.Afternoon[0].data?.next_6_hours}</TableCell>
				{:else}
					<TableCell>s</TableCell>
				{/if}
				{#if value.Evening.length > 0}
					<TableCell>{value.Evening[0].data?.next_6_hours}</TableCell>
				{:else}
					<TableCell>s</TableCell>
				{/if}
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
{#await data.weather_data}
	<p>...data loading</p>
{/await}
