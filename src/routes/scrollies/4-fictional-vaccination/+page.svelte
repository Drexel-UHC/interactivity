<script>
	import data_all from './data.json';
	import { scaleLinear, scaleLog } from 'd3-scale';
	import { tweened } from 'svelte/motion';

	// D3 Scales
	let width = 400;
	let height = 400;
	let xValues = data_all.map((d) => d.x);
	let yValues = data_all.map((d) => d.y);
	let xScale = scaleLinear()
		.domain([0, Math.max(...xValues) * 1.1])
		.range([0, width]);
	let yScale = scaleLinear()
		.domain([0, Math.max(...yValues) * 1.1])
		.range([height, 0]);

	// Initialize Tweened data
	const allSteps = [...new Set(data_all.map((d) => d.step))];
	let step = 1;
	let data = data_all.filter((d) => d.step == step);
	const tweenedData = tweened(data, { duration: 100 });

	$: {
		data = data_all.filter((d) => d.step == step);
		tweenedData.set(data);
	}
</script>

<div class="buttons">
	{#each allSteps as s (s)}
		<button on:click={() => (step = s)} type="button" class="btn btn-sm variant-filled">
			Step {s}
		</button>
	{/each}
</div>

<div class="chart">
	<svg {width} {height}>
		{#each $tweenedData as { x, y, id } (id)}
			<circle cx={xScale(x)} cy={yScale(y)} r="5" />
		{/each}
	</svg>
</div>

<style>
	.chart {
		background: whitesmoke;
		width: 400px;
		height: 400px;
	}
</style>
