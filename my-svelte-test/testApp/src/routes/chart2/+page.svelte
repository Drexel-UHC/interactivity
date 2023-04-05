<svelte:head>
	<title>Bar Chart 2</title>
	<meta name="description" content="About test page" />
</svelte:head>

<h1>D3 Pie Chart Example</h1>

<script>
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
  
	const data = [
	  { label: 'Kids', value: 20 },
	  { label: 'Teenagers', value: 40 },
	  { label: 'Adults', value: 20 },
	  { label: 'Parents', value: 30 },
	  { label: 'GrandParents', value: 40 },
	];
  
	onMount(() => {
	  const svg = d3.select('#chart')
		.attr('width', 500) // set a larger width
		.attr('height', 500); // set a larger height
  
	  const pie = d3.pie()
		.value(d => d.value);
  
	  const arc = d3.arc()
		.innerRadius(0)
		.outerRadius(200);
  
	  const arcs = svg.selectAll('g')
		.data(pie(data))
		.enter()
		.append('g')
		.attr('transform', 'translate(250, 250)');
  
	  arcs.append('path')
		.attr('d', arc)
		.attr('fill', (d, i) => d3.schemeCategory10[i]);

	  arcs.append('text')
		.attr('transform', d => `translate(${arc.centroid(d)})`)
		.attr('text-anchor', 'middle')
		.text(d => `${d.data.label}: ${d.data.value}`);
	});
</script>
  
<svg id="chart" style="border: 5px solid black;"></svg>
  