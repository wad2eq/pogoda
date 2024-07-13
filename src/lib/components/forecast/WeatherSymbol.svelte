<script lang="ts">
	export let image: string | undefined;
</script>

<img src={`/weathericons/${image}.svg`} alt="" class="w-9" />
