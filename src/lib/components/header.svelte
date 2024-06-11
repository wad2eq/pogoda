<script>
	import { page } from '$app/stores';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import * as Drawer from '$lib/components/ui/drawer';
	import * as Menubar from '$lib/components/ui/menubar';
	import { onMount } from 'svelte';
	let src = './logo-small.jpg';
	let data = '';
	//default geolocation
	let name = { lat: 59.355091, lng: 5.323378 };
	function loadLocation() {
		console.log(name);
	}

	function getPlace() {
		return {};
	}

	//Get current user position
	//TODO: przenieś metodę do UTILS ? A jak async zadziała
	onMount(() => {
		navigator.geolocation.getCurrentPosition((location) => {
			name = {
				lat: location.coords.latitude,
				lng: location.coords.longitude
			};
			loadLocation();
		});
	});
</script>

<div class="top-bar top-bar flex items-center border-b p-3">
	<div>
		<strong>Your localisaton is: </strong>
		{#if $page.params.city}
			{$page.params.city}
		{:else}
			{name.lat} - {name.lng}
		{/if}
	</div>
	<div class="grow"></div>
	<div class="flex gap-3">
		<form action="/search">
			<Input bind:value={data} placeholder="Give the region" on:focus={() => (data = '')} />
			<Button variant="outline">Szukaj</Button>
		</form>
	</div>
</div>
