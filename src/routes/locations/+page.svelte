<script lang="ts">
	//TODO: handle no localization provided jeżeli user nie da lokalizacji
	// to pobieramy ostatnią lokalizację podaną przez usera albo na podstawie geo ładujemy miast z okolicy

	import type { Prediction } from '$lib/types/Google_places.js';
	export let form;
	
	const { predictions }: Array<Prediction> = form?.localizationList;
	console.log(predictions);
</script>

You are looking for : {form ? form?.localization : 'Podaj nazwę'}

{#if !form}{/if}
<div>Dane sie pobierają</div>
{#if form}
	<ul>
		{#each predictions as location, i}
			<li class="border-b border-gray-300 py-3">
				<a href="forecast/{form.localization}">{location.description}</a>
			</li>
		{/each}
	</ul>
{/if}
