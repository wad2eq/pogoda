<script>
	import { page } from '$app/stores';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import * as Drawer from '$lib/components/ui/drawer';
	import * as Menubar from '$lib/components/ui/menubar';
	import { onMount } from 'svelte';
	let src = './logo-small.jpg';
	let data = '';
	let name = { lat: 59.355091, lng: 5.323378 };
	function loadLocation() {
		console.log(name);
	}
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
		<Input bind:value={data} placeholder="Give the region" on:focus={() => (data = '')} />
		<Drawer.Root>
			<Drawer.Trigger><Button variant="outline">Szukaj</Button></Drawer.Trigger>
			<Drawer.Content>
				<Drawer.Header>
					<Drawer.Title>Navigation</Drawer.Title>
					<Drawer.Description>This action cannot be undone.</Drawer.Description>
				</Drawer.Header>
				<Drawer.Footer>
					<Button>Submit</Button>
					<Drawer.Close>Cancel</Drawer.Close>
				</Drawer.Footer>
			</Drawer.Content>
		</Drawer.Root>
		<Menubar.Root>
			<Menubar.Menu>
				<Menubar.Trigger>Menu</Menubar.Trigger>
				<Menubar.Content>
					<Menubar.Item>Map</Menubar.Item>
					<Menubar.Item>New Window</Menubar.Item>
					<Menubar.Separator />
					<Menubar.Item>Share</Menubar.Item>
					<Menubar.Separator />
					<Menubar.Item>Print</Menubar.Item>
				</Menubar.Content>
			</Menubar.Menu>
		</Menubar.Root>
	</div>
</div>
