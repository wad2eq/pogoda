<script lang="ts">
	import { page } from '$app/stores';

	import { get_part_day } from '$lib/utils/time_utils.js';
	import Hourlyforecast from '$lib/components/forecast/Hourlyforecast.svelte';
	import * as Table from '$lib/components/ui/table';
	import { cityForcast } from '$lib/data/cityforcast';
	import type { DayInterval, LongInterval } from '$lib/types/Cityforcast';
	import type { Main, Timesery } from '$lib/types/compact_forecast.js';
	import TableCell from '$lib/components/ui/table/table-cell.svelte';
	import WeatherSymbol from '$lib/components/forecast/WeatherSymbol.svelte';

	export let data;
	const entries = data.weather_data ? Object.keys(data.weather_data) : [];
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
			<Table.Head>Precip</Table.Head>
			<Table.Head>wind</Table.Head>
			<Table.Head>call</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each Object.entries(data.weather_data ? data.weather_data : {}) as [key, value], i}
			<Table.Row>
				<!-- Night -->
				<TableCell>{key} + {i}</TableCell>
				{#if value.Night.length > 0}
					{#if value.Night[0].data?.next_6_hours !== undefined || value.Night[0].data?.next_1_hours !== undefined}
						<TableCell>
							<WeatherSymbol
								image={value.Night[0].data?.next_6_hours?.summary.symbol_code ||
									value.Night[0].data?.next_6_hours?.summary.symbol_code ||
									value.Night[0].data?.next_12_hours?.summary.symbol_code ||
									':)'}
							/>
						</TableCell>
					{/if}
				{:else}
					<TableCell></TableCell>
				{/if}

				<!-- /Night -->
				<!-- Morning -->
				{#if value.Morning && value.Morning.length > 0 && value.Morning[0]?.data}
					<TableCell>
						<WeatherSymbol
							image={value.Morning[0].data.next_6_hours?.summary.symbol_code ||
								value.Morning[0].data.next_1_hours?.summary.symbol_code ||
								value.Morning[0].data.next_12_hours?.summary.symbol_code ||
								'default_symbol'}
						/>
					</TableCell>
				{:else}
					<TableCell></TableCell>
				{/if}
				<!-- /Morning -->
				<!-- Afternoon -->
				{#if value.Afternoon.length > 0}
					{#if value.Afternoon[0].data?.next_6_hours !== undefined || value.Afternoon[0].data?.next_1_hours !== undefined}
						<TableCell>
							<WeatherSymbol
								image={value.Afternoon[0].data?.next_6_hours?.summary.symbol_code ||
									value.Afternoon[0].data?.next_1_hours?.summary.symbol_code ||
									value.Afternoon[0].data?.next_12_hours?.summary.symbol_code ||
									':)'}
							/>
						</TableCell>
					{/if}
				{:else}
					<TableCell></TableCell>
				{/if}
				<!-- /Afternoon -->
				<!-- Evening -->
				{#if value.Evening.length > 0}
					{#if value.Evening[0].data?.next_6_hours !== undefined || value.Evening[0].data?.next_1_hours !== undefined}
						<TableCell>
							<WeatherSymbol
								image={value.Evening[0].data?.next_6_hours?.summary.symbol_code ||
									value.Evening[0].data?.next_1_hours?.summary.symbol_code ||
									value.Evening[0].data?.next_12_hours?.summary.symbol_code ||
									':)'}
							/>
						</TableCell>
					{/if}
				{:else}
					<TableCell></TableCell>
				{/if}
				<!-- /Evening -->
				<!-- Temperature -->
				{#if value && value.Night && value.Night[0] && value.Night[0].data}
					<TableCell>{value.Night[0].data?.instant.details.air_temperature}</TableCell>
				{:else}
					<TableCell>s</TableCell>
				{/if}
				<!-- /Temperature -->
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
{#await data.weather_data}
	<p>...data loading</p>
{/await}
