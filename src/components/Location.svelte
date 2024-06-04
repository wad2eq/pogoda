<script>
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	let location = '';

	function getLocation() {
		location = 'warszawa';
	}
</script>

<div class="p-6">
	<div class="m-3">
		<label for="localisaton" class="mb-3 block">
			Twoja pozycja jest {location}
		</label>
		<Input type="text" bind:value={location} placeholder="City" id="localisation" />
	</div>
	<!-- <Button on:click={getLocation} class="m-3">Pokaż pogodę</Button> -->
	<div></div>
</div>

{location}
