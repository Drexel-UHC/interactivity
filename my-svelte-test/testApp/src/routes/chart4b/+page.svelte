<svelte:head>
	<title>Bar Chart 4b</title>
	<meta name="description" content="About test page" />
</svelte:head>

<h1>D3 Dot Chart Example</h1>
<script>
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
  
	const data = [
	  { x: 50,  y: 20, group : 1 },
	  { x: 100, y: 50, group : 1 },
	  { x: 150, y: 80, group : 1 },
	  { x: 200, y: 40, group : 1 },
	  { x: 250, y: 70, group : 1 },
	  { x: 300, y: 10, group : 1 },
	  { x: 350, y: 90, group : 1 },
	  { x: 400, y: 30, group : 2 },
	  { x: 450, y: 60, group : 2 },
	  { x: 500, y: 50, group : 2 },
	  { x: 210, y: 43, group : 2 },
	  { x: 280, y: 72, group : 2 },
	  { x: 370, y: 11, group : 2 },
	  { x: 330, y: 95, group : 2 },
	  { x: 430, y: 37, group : 2 },
	  { x: 480, y: 64, group : 2 },
	];
  
	onMount(() => {
	  const svg = d3.select('#chart')
		.attr('width', 800)
		.attr('height', 400);
  
	  const margin = { top: 20, right: 20, bottom: 40, left: 50 };
	  const width = +svg.attr('width') - margin.left - margin.right;
	  const height = +svg.attr('height') - margin.top - margin.bottom;
  
	  const xScale = d3.scaleLinear()
		.domain([0, d3.max(data, d => d.x)])
		.range([0, width]);
  
	  const yScale = d3.scaleLinear()
		.domain([0, d3.max(data, d => d.y)])
		.range([height, 0]);
  
	  const xAxis = d3.axisBottom(xScale)
		.ticks(5);
  
	  const yAxis = d3.axisLeft(yScale)
		.ticks(5);
  
	  svg.append('g')
		.attr('transform', `translate(${margin.left}, ${height + margin.top})`)
		.call(xAxis);
  
	  svg.append('g')
		.attr('transform', `translate(${margin.left}, ${margin.top})`)
		.call(yAxis);
  
	  svg.append('text')
		.attr('x', margin.left + width / 2)
		.attr('y', height + margin.top + margin.bottom / 2)
		.attr('text-anchor', 'middle')
		.text('X Label');
  
	  svg.append('text')
		.attr('transform', 'rotate(-90)')
		.attr('x', -margin.top - height / 2)
		.attr('y', margin.left / 2)
		.attr('text-anchor', 'middle')
		.text('Y Label');
  
	  svg.selectAll('circle')
		.data(data)
		.enter()
		.append('circle')
		.attr('cx', d => xScale(d.x) + margin.left)
		.attr('cy', d => yScale(d.y) + margin.top)
		.attr('r', 7)
		.style('fill', d => d.group === 1 ? 'red' : 'blue');
	});
</script>
  
<svg id="chart"></svg>