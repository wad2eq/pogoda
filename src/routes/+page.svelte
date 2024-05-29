<script>
	import * as Table from '$lib/components/ui/table';
	import { daysOfTheWeek } from '$lib/data/days';
	const forcasts = [
		{
			id: 'INV001',
			city: 'Oslo',
			temp: [26, 19, 21, 22],
			icon: '/weathericons/sleet.svg'
		},
		{
			id: 'INV002',
			city: 'Bergen',
			temp: [23, 20, 21, 22],
			icon: '/weathericons/clearsky_day.svg'
		},
		{
			id: 'INV003',
			city: 'Stavanger',
			temp: [24, 20, 21, 22],
			icon: '/weathericons/cloudy.svg'
		},
		{
			id: 'INV004',
			city: 'Trondheim',
			temp: [16, 20, 21, 22],
			icon: '/weathericons/clearsky_day.svg'
		},
		{
			id: 'INV005',
			city: 'Trondheim',
			temp: [22, 20, 21, 22],
			icon: '/weathericons/clearsky_day.svg'
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
				<Table.Cell class="font-medium"><a href="/forecast/city/">{forcast.city}</a></Table.Cell>
				{#each forcast.temp as temp, j}
					<Table.Cell
						><div class="flex items-center">
							<img src={forcast.icon} alt="" class="w-9" />{forcast.temp[0]}{j}
						</div></Table.Cell
					>
				{/each}
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
