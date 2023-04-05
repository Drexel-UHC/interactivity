<svelte:head>
	<title>Bar Chart 3</title>
	<meta name="description" content="About test page" />
</svelte:head>

<h1>D3 Line Chart Example</h1>
<script>
	import { onMount } from 'svelte';
	import * as d3 from 'd3';

	const data = [
		{ year: 2010, value: 10 },
		{ year: 2011, value: 35 },
		{ year: 2012, value: 30 },
		{ year: 2013, value: 40 },
		{ year: 2014, value: 15 },
		{ year: 2015, value: 60 },
		{ year: 2016, value: 30 },
		{ year: 2017, value: 40 },
		{ year: 2018, value: 30 },
		{ year: 2019, value: 40 },
		{ year: 2020, value: 100 },
		{ year: 2021, value: 100 },
		{ year: 2021, value: 40 },
		{ year: 2022, value: 100 },
		{ year: 2023, value: 100 },
	];

	onMount(() => {
		const svg = d3.select('#chart')
			.attr('width', 500)
			.attr('height', 300);

		const xScale = d3.scaleLinear()
			.domain(d3.extent(data, d => d.year))
			.range([50, 450]);

		const yScale = d3.scaleLinear()
			.domain(d3.extent(data, d => d.value))
			.range([250, 50]);

		const line = d3.line()
			.x(d => xScale(d.year))
			.y(d => yScale(d.value));

		svg.append('path')
			.datum(data)
			.attr('d', line)
			.attr('stroke', 'blue')
			.attr('fill', 'none');

		const xAxis = d3.axisBottom(xScale)
			.ticks(5)
			.tickFormat(d3.format('d'));

		const yAxis = d3.axisLeft(yScale)
			.ticks(5);

		svg.append('g')
			.attr('transform', 'translate(0, 250)')
			.call(xAxis);

		svg.append('g')
			.attr('transform', 'translate(50, 0)')
			.call(yAxis);
			svg.append('text')
			.attr('x', 250)
			.attr('y', 290)
			.attr('text-anchor', 'middle')
			.text('Year');

		svg.append('text')
			.attr('transform', 'rotate(-90)')
			.attr('x', -150)
			.attr('y', 20)
			.attr('text-anchor', 'middle')
			.text('Value');
	});
</script>

<svg id="chart"></svg>
