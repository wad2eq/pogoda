<script lang="ts">
	import { formatNumber, getFormattedDate } from '$lib/TimeUtils';
	import type { Timeseries } from '$lib/types/YrWeather';
	//TODO: jak zrobić opcjonalny props
	export let now: Timeseries;
</script>

<!-- TODO: daj widok dla now jak nie ma  -->
{#if now}
	<div
		class="mb-4 flex w-full flex-wrap items-center justify-between gap-4 rounded-md border border-gray-800 bg-gray-50 p-4 text-4xl"
	>
		<div class="w-full sm:w-auto">
			<!-- TODO: dodać ikony z innego repozytorium -->
			<img src="" alt="" />
		</div>
		<div>
			{getFormattedDate(now.time)}
		</div>
		<div class="text-red-500">
			{formatNumber(now.data.instant.details.air_temperature, 'celsius')}
		</div>
		<div class="text-blue-500">
			{formatNumber(now.data.next_1_hours.details.precipitation_amount, 'millimeter')}
		</div>
		<div class="text-gray-500">
			{formatNumber(now.data.instant.details.wind_speed, 'meter-per-second')}
		</div>
	</div>
{/if}
