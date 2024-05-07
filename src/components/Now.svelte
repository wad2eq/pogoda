<script lang="ts">
	import { formatNumber } from '$lib/TimeUtils';
	import type { Timeseries } from '$lib/types/YrWeather';

	export let now: Timeseries;
</script>

<div
	class="mb-4 flex w-full flex-wrap items-center justify-between gap-4 rounded-md border border-gray-800 bg-gray-50 p-4 text-4xl"
>
	<div class="w-full sm:w-auto">
		<!-- TODO: dodać ikony z innego repozytorium -->
		<img src="" alt="" />
	</div>
	<div class="text-red-500">
		{formatNumber}
	</div>
	<div class="text-blue-500">
		{formatNumber}
	</div>
	<div class="text-gray-500">
		{formatNumber}
	</div>
</div>
