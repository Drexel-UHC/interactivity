<svelte:head>
	<title>Bar Chart 5</title>
	<meta name="description" content="About test page" />
</svelte:head>

<script>
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
  
	let svg;
  
	const data = {
	  nodes: [
		{ id: 'Alice' },
		{ id: 'Bob' },
		{ id: 'Carol' },
		{ id: 'David' },
		{ id: 'Erin' },
		{ id: 'Frank' }
	  ],
	  links: [
		{ source: 'Alice', target: 'Bob' },
		{ source: 'Bob', target: 'Carol' },
		{ source: 'Carol', target: 'David' },
		{ source: 'David', target: 'Erin' },
		{ source: 'Erin', target: 'Frank' },
		{ source: 'Frank', target: 'Alice' },
		{ source: 'Alice', target: 'Carol' },
	  ]
	};
  
	onMount(() => {
	  const width = 400;
	  const height = 400;
  
	  const simulation = d3
		.forceSimulation(data.nodes)
		.force(
		  'link',
		  d3.forceLink(data.links).id((d) => d.id)
		)
		.force('charge', d3.forceManyBody().strength(-50))
		.force('center', d3.forceCenter(width / 2, height / 2));
  
		svg = d3
			.select('#graph')
			.append('svg')
			.attr('width', width)
			.attr('height', height);

  
	  const link = svg
		.selectAll('line')
		.data(data.links)
		.join('line')
		.attr('stroke', 'black')
		.attr('stroke-opacity', 1)
		.attr('stroke-width', (d) => Math.sqrt(d.value));
  
	  const node = svg
		.selectAll('circle')
		.data(data.nodes)
		.join('circle')
		.attr('r', 5)
		.attr('fill', (d, i) => d3.schemeCategory10[i])
		.call(
		  d3
			.drag()
			.on('start', (event, d) => {
			  if (!event.active) simulation.alphaTarget(0.3).restart();
			  d.fx = d.x;
			  d.fy = d.y;
			})
			.on('drag', (event, d) => {
			  d.fx = event.x;
			  d.fy = event.y;
			})
			.on('end', (event, d) => {
			  if (!event.active) simulation.alphaTarget(0);
			  d.fx = null;
			  d.fy = null;
			})
		);
  
	  node.append('title').text((d) => d.id);
  
	  simulation.on('tick', () => {
		link
		  .attr('x1', (d) => d.source.x)
		  .attr('y1', (d) => d.source.y)
		  .attr('x2', (d) => d.target.x)
		  .attr('y2', (d) => d.target.y);
  
		node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);
	  });

	  svg.append('text')
			.attr('x', 250)
			.attr('y', 20)
			.attr('text-anchor', 'middle')
			.attr('font-size', '18px')
			.text('Force-directed graph');
	});
</script>
  
<div id="graph"></div>