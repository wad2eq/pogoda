<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Table from '$lib/components/ui/table';
	import * as Drawer from '$lib/components/ui/drawer';
	import { Button } from '$lib/components/ui/button';
	import type { ShortInterval, LongInterval } from '$lib/types/Cityforcast';
	import { onMount } from 'svelte';

	//TODO: do wywalenia ?
	const getFormattedDate = (dateTime: Date) => {
		const national = 'no-NO';
		const date = new Date(dateTime);
		// // const options = {dateStyle: 'full'};
		const options = { weekday: 'long', month: 'long', day: 'numeric' };
		const formattedDate = date.toLocaleDateString(national, options);
		return formattedDate;
	};

	export let forecastData: LongInterval;
	export let time: Date;

	//Pobież dane aktualne dla lokalizacji
	let currentDayForeCast: Array<LongInterval> = [];
	onMount(() => getTempTime());
	const getTempTime = () => {
		const currentDay = new Date(time).getDate();
		currentDayForeCast = forecastData.filter((item: ShortInterval) => {
			return new Date(item.start).getDate() === currentDay;
		});
	};
</script>

<Dialog.Root>
	<Dialog.Trigger>Open</Dialog.Trigger>
	<Dialog.Content>
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head>Time</Table.Head>
					<Table.Head>Weather</Table.Head>
					<Table.Head>Temp</Table.Head>
					<Table.Head>Precip. mm</Table.Head>
					<Table.Head>Wind(gust) m/s</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each currentDayForeCast as foreCast, i}
					<Table.Row>
						<Table.Cell>{new Date(foreCast.start).getHours()}</Table.Cell>
						<Table.Cell>
							{#if foreCast.symbolCode.next12Hours}
								<img
									src={`/weathericons/${foreCast.symbolCode.next12Hours}.svg`}
									alt=""
									class="w-9"
								/>
							{/if}
						</Table.Cell>
						<Table.Cell>{foreCast.temperature.value}</Table.Cell>
						<Table.Cell></Table.Cell>
						<Table.Cell>{foreCast.wind.speed}</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</Dialog.Content>
</Dialog.Root>
