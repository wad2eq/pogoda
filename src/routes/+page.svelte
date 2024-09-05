<script>
	import * as Table from '$lib/components/ui/table';
	import { daysOfTheWeek } from '$lib/data/days';
	import WeatherSymbol from '$lib/components/forecast/WeatherSymbol.svelte';
	//Forcast dla przykładowych miast
	const forcasts = [
		{
			id: 'INV001',
			city: 'Oslo',
			temp: [26, 19, 21, 22],
			icon: 'sleet'
		},
		{
			id: 'INV002',
			city: 'Bergen',
			temp: [23, 20, 21, 22],
			icon: 'clearsky_day'
		},
		{
			id: 'INV003',
			city: 'Stavanger',
			temp: [24, 20, 21, 22],
			icon: 'cloudy'
		},
		{
			id: 'INV004',
			city: 'Trondheim',
			temp: [16, 20, 21, 22],
			icon: 'clearsky_day'
		},
		{
			id: 'INV005',
			city: 'Trondheim',
			temp: [22, 20, 21, 22],
			icon: 'clearsky_day'
		}
	];
</script>

<Table.Root>
	<Table.Caption></Table.Caption>
	<Table.Header>
		<Table.Row>
			<Table.Head class="w-[200px]">Invoice</Table.Head>
			<Table.Head>{daysOfTheWeek[2]}</Table.Head>
			<Table.Head>{daysOfTheWeek[3]}</Table.Head>
			<Table.Head>{daysOfTheWeek[4]}</Table.Head>
			<Table.Head>{daysOfTheWeek[5]}</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each forcasts as forcast, i (i)}
			<Table.Row>
				<Table.Cell class="font-medium"
					><a href={`/forecast/${forcast.city}/`} class="city-link">{forcast.city}</a></Table.Cell
				>
				{#each forcast.temp as temp, j}
					<Table.Cell
						><div class="flex items-center">
							<WeatherSymbol image={forcast.icon} />
						</div></Table.Cell
					>
				{/each}
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>

<style>
	.city-link::after {
		content: '';
		display: block;
		position: absolute;
		/* background-color: antiquewhite; */
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
	}
</style>
