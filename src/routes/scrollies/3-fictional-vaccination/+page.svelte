<script>
	import data1 from './step1.json';
	import { scaleLinear, scaleLog } from 'd3-scale';

	// D3 Scales
	let width = 400;
	let height = 400;
	let xValues = data1.map((d) => d.vaccination_rate);
	let yValues = data1.map((d) => d.covid_cases);
	console.log([Math.min(...xValues), Math.max(...xValues)]);
	console.log([Math.min(...yValues), Math.max(...yValues)]);
	let xScale = scaleLinear()
		.domain([0, Math.max(...xValues) * 1.1])
		.range([0, width]);
	let yScale = scaleLinear()
		.domain([0, Math.max(...yValues) * 1.1])
		.range([height, 0]);
</script>

<div class="container">
	<div class="chart">
		<svg {width} {height}>
			{#each data1 as d}
				<circle
					cx={xScale(d.vaccination_rate)}
					cy={yScale(d.covid_cases)}
					r={15}
					fill="steelblue"
					stroke="#000000"
				/>
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
