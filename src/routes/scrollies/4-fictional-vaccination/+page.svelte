<script>
	import data from './data.json';
	import { scaleLinear, scaleLog } from 'd3-scale';
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';

	// D3 Scales
	let width = 400;
	let height = 400;
	let xValues = data.map((d) => d.x);
	let yValues = data.map((d) => d.y);
	let xScale = scaleLog()
		.domain([0.1, Math.max(...xValues) * 1.1])
		.range([0, width]);
	let yScale = scaleLog()
		.domain([0.1, Math.max(...yValues) * 1.1])
		.range([height, 0]);

	// Tween
	let data1 = data.filter((d) => d.step == '1');
	const tweenedData = tweened(data1, { duration: 500, easing: cubicInOut });
</script>

<div class="container">
	<div class="chart">
		<svg {width} {height}>
			{#each tweenedData as d}
				<circle cx={xScale(d.x)} cy={yScale(d.y)} r={15} fill="steelblue" stroke="#000000" />
			{/each}
		</svg>
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
	.chart {
		background: whitesmoke;
		width: 400px;
		height: 400px;
	}
</style>
