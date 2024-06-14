<script>
	export let data;
	console.log(data.response.predictions);
</script>

<ul>
	{#each data.response.predictions as location, i}
		<li class="border-b border-gray-300 py-3">{location.description}</li>
	{/each}
</ul>
