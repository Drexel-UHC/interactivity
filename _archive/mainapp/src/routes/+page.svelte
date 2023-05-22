<script>
	// import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import bar_image from '$lib/images/barchart1.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<picture>
		<img class="mytest-nike" src={bar_image} alt="Welcome" />
	</picture>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<!-- <Counter /> -->
</section>

<style>
	.mytest-nike {
		width: 100%;
		max-width: 200px;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
