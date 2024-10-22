<script lang="ts">
	//TODO: handle no localization provided jeżeli user nie da lokalizacji
	// to pobieramy ostatnią lokalizację podaną przez usera albo na podstawie geo ładujemy miast z okolicy

	export let form;
	console.log('Dane z formularza ', form);
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
		{#each form.localizationList.predictions as localization, i}
			<li class="border-b border-gray-300 py-3">
				<a href="/forecast/{localization.description}" data-sveltekit-preload-data="tap"
					>{localization.description}</a
				>
			</li>
		{/each}
	</ul>
{/if}
