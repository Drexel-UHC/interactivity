<script>
	import data_all from './data.json';
	import text_all from './text.json';
	import Scroll from './Scrolly.svelte';
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

	// Steps
	let currentStep;
	const allSteps = [...new Set(data_all.map((d) => d.step))];
	const steps = text_all.filter((i) => allSteps.includes(i.step)).map((i) => i.text);

	//  Tweened data

	const tweenedData = tweened(
		data_all.filter((d) => d.step == 0),
		{ duration: 100 }
	);

	$: if (currentStep == 0) {
		tweenedData.set(data_all.filter((d) => d.step == 0));
	} else if (currentStep == 1) {
		tweenedData.set(data_all.filter((d) => d.step == 1));
	} else if (currentStep == 2) {
		tweenedData.set(data_all.filter((d) => d.step == 2));
	}
</script>

<section>
	<!-- The chart in the background, which is sticky thanks to CSS below -->
	<div class="chart">
		<svg {width} {height}>
			{#each $tweenedData as { x, y, id } (id)}
				<circle cx={xScale(x)} cy={yScale(y)} r="5" />
			{/each}
		</svg>
	</div>

	<!-- The scrolling container which includes each of the text elements -->
	<Scroll bind:value={currentStep}>
		{#each steps as text, i}
			<div class="step" class:active={currentStep === i}>
				<div class="step-content">
					{@html text}
				</div>
			</div>
		{/each}
	</Scroll>
</section>

<style>
	/* The fixed chart */
	.chart {
		background: whitesmoke;
		width: 400px;
		height: 400px;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
		position: sticky;
		top: 10%;
		margin: auto;
	}

	/* Scrollytelling CSS */
	.step {
		height: 80vh;
		display: flex;
		place-items: center;
		justify-content: center;
	}

	.step-content {
		background: whitesmoke;
		color: #ccc;
		border-radius: 5px;
		padding: 0.5rem 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		transition: background 500ms ease;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
		z-index: 10;
	}

	.step.active .step-content {
		background: grey;
		color: white;
	}
</style>
