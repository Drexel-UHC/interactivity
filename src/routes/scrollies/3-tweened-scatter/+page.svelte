<script>
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import data_all from './data.json';

	// Initialize Tweened data
	let step = '1';
	let data = data_all.filter((d) => d.step == step);
	const tweenedData = tweened(data, { duration: 500, easing: cubicInOut });

	// Set up step reactive
	function updateStep(newStep) {
		step = newStep;
		data = data_all.filter((d) => d.step == step.toString());
		tweenedData.set(data);
	}
</script>

<div class="container">
	<div class="buttons">
		<button on:click={() => updateStep('1')} type="button" class="btn btn-sm variant-filled"
			>Step 1</button
		>
		<button on:click={() => updateStep('2')} type="button" class="btn btn-sm variant-filled"
			>Step 2</button
		>
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
		margin-top: 1rem;
	}

	.plot {
		margin: 5px;
		border: 1px solid grey;
	}
</style>
