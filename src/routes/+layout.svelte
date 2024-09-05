<script>
	import Header from '$lib/components/header.svelte';
	import '../app.pcss';
	let src = '/logo-small.jpg';
</script>

<div class="container relative flex min-h-screen flex-col bg-background" id="page">
	<div class="logo"><a href="/"><img {src} alt="" /></a></div>
	<div class="overflow-hidden rounded-[0.5rem] border bg-background shadow-xl">
		<Header />
		<div class="p-3"><slot /></div>
	</div>
</div>

<style>
	.logo {
		max-width: 100px;
	}
</style>
