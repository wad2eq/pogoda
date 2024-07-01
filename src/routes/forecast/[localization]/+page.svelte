<script lang="ts">
	import { page } from '$app/stores';

	import Hourlyforecast from '$lib/components/forecast/Hourlyforecast.svelte';
	import { get_forecast } from '$lib/utils/fetch_data';
	import * as Table from '$lib/components/ui/table';
	import { cityForcast } from '$lib/data/cityforcast';
	import type { DayInterval, LongInterval } from '$lib/types/Cityforcast';

	const dayIntervals: Array<DayInterval> = cityForcast.dayIntervals;
	const longInterval: Array<LongInterval> = cityForcast.longIntervals;

	const promise = get_forecast();
	// console.log(await promise.json());

	//TODO: ustawić zmienne globalne - może na tłumacznie
	const currentLocation = '';

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
		{#each dayIntervals as dayInterval, i}
			<Table.Row>
				<Table.Cell><strong>{getFormattedDate(dayInterval.start)}</strong></Table.Cell>
				{#each dayInterval.sixHourSymbols as symbol, i}
					<Table.Cell>
						{#if symbol}
							<img src={`/weathericons/${symbol}.svg`} alt="" class="w-9" />
						{/if}
					</Table.Cell>
				{/each}
				<Table.Cell>{dayInterval.temperature.min}/{dayInterval.temperature.max}</Table.Cell>
				<Table.Cell>{dayInterval.precipitation.value}/mm</Table.Cell>
				<Table.Cell>{dayInterval.wind.max}</Table.Cell>
				<Table.Cell
					><Hourlyforecast forecastData={longInterval} time={dayInterval.start} /></Table.Cell
				>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
