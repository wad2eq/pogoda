<script lang="ts">
	export let form;
	console.log(form);
</script>

You are looking for : {form ? form?.name : 'Podaj nazwę'}
{#if !form}
	<div>Dane sie pobieraja</div>
{/if}
<ul>
	<!-- {#each data.response.predictions as location, i}
		<li class="border-b border-gray-300 py-3">{location.description}</li>
	{/each} -->
</ul>
