<script lang="ts">
	import { getFormattedDate } from '$lib/TimeUtils';
	import * as Table from '$lib/components/ui/table';
	import type { Timeseries } from '$lib/types/YrWeather';
	export let WhetherData: Timeseries;
	console.log(WhetherData);
	let currentItems = 13;
</script>

{#if WhetherData}
	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head>Klokkeslett</Table.Head>
				<Table.Head>Vær(pogoda)</Table.Head>
				<Table.Head>Temp</Table.Head>
				<Table.Head>Nedbør</Table.Head>
				<Table.Head>Vind</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each WhetherData.slice(1, currentItems) as item}
				<Table.Row>
					<Table.Cell>{getFormattedDate(item.time)}</Table.Cell>
					<Table.Cell>2</Table.Cell>
					<Table.Cell>{item.data.instant.details.air_temperature}</Table.Cell>
					<Table.Cell>4</Table.Cell>
					<Table.Cell>5</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
{:else}
	<div>Dane</div>
{/if}
