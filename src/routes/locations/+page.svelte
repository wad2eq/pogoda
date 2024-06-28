<script lang="ts">
	//TODO: handle no localization provided jeżeli user nie da lokalizacji
	// to pobieramy ostatnią lokalizację podaną przez usera albo na podstawie geo ładujemy miast z okolicy

	import type { Prediction } from '$lib/types/Google_places.js';
	export let form;
	console.log('To jest error ', form);
	//TODO: zastanowić się nad obsługa będów
</script>

{#if form?.error}
	{form.error}
{/if}
{#if !form}
	<p>Please provide a place to forcast</p>{/if}
{#if form?.success}
	You are looking for : {form ? form?.searchLocalization : 'Podaj nazwę'}
	<ul>
		{#each form.localizationList.predictions as localizaton, i}
			<li class="border-b border-gray-300 py-3">
				<a href="forecast/{form.searchLocalization}">{localizaton.description}</a>
			</li>
		{/each}
	</ul>
{/if}
