<script>
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import data_all from './data.json';

	let data = data_all.filter((d) => d.step == '1');

	const tweenedData = tweened(data, { duration: 500, easing: cubicInOut });

	function updateData() {
		// Update the data array somehow, e.g. adding random data
		data = data.map((point) => ({ x: point.x + Math.random(), y: point.y + Math.random() }));
		tweenedData.set(data);
	}
</script>

<div class="container">
	<div class="buttons">
		<button on:click={updateData} type="button" class="btn btn-sm variant-filled">step 1</button>
		<button type="button" class="btn btn-sm variant-filled">step 2</button>
	</div>

	<div class="plot">
		<svg width="300" height="300">
			{#each $tweenedData as { x, y } (x)}
				<circle cx={x * 20} cy={y * 20} r="5" />
			{/each}
		</svg>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 1px solid black;
		margin-top: 1rem;
	}

	.buttons {
		border: 1px solid blue;
	}

	.plot {
		border: 1px solid red;
	}
</style>
