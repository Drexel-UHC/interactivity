<svelte:head>
	<title>Boc Chart</title>
	<meta name="description" content="About test page" />
</svelte:head>

<script>
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
  
	  const data = [
	  { name: 'A', min: 10, q1: 15, median: 20, q3: 25, max: 30 },
	  { name: 'B', min: 20, q1: 30, median: 40, q3: 50, max: 60 },
	  { name: 'C', min: 30, q1: 35, median: 45, q3: 55, max: 65 },
	];
	export let width = 500;
	export let height = 400;
  
	let svg;
	  
  
	onMount(() => {
	  drawBoxPlot();
	});
  
	function drawBoxPlot() {
	const xScale = d3.scaleBand()
	  .range([0, width])
	  .domain(data.map(d => d.name))
	  .padding(0.5);
  
	const yScale = d3.scaleLinear()
	  .range([height, 0])
	  .domain([0, d3.max(data, d => d.max)]);
  
	const xAxis = d3.axisBottom(xScale);
	const yAxis = d3.axisLeft(yScale);
  
	// Wrap the SVG element with a D3 selection
	const svgSelection = d3.select(svg);
  
	svgSelection.select('.x-axis')
	  .call(xAxis);
  
	svgSelection.select('.y-axis')
	  .call(yAxis);
  
	const boxes = svgSelection.selectAll('.box')
	  .data(data);
  
	boxes.enter()
	  .append('rect')
	  .attr('class', 'box')
	  .attr('x', d => xScale(d.name))
	  .attr('y', d => yScale(d.q3))
	  .attr('width', xScale.bandwidth())
	  .attr('height', d => yScale(d.q1) - yScale(d.q3))
	  .attr('fill', 'steelblue')
	  .attr('stroke', 'black');
  
	boxes.exit().remove();
  }
  
  </script>
  
  <style>
	svg {
	  font-size: 12px;
	}
  </style>
  
  <svg bind:this={svg} width={width} height={height}>
	<g class="x-axis" transform={`translate(0,${height})`}></g>
	<g class="y-axis"></g>
  </svg>  