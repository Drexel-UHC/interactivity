<svelte:head>
	<title>Map A</title>
	<meta name="description" content="map page" />
</svelte:head>

<script>
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	import { feature } from 'topojson-client';
	import topojsonData from '../../../data/us-states.json';
  
	const width = 700;
	const height = 600;
  
	function drawMap() {
	  const svg = d3.select('#map')
		.attr('width', width)
		.attr('height', height);
  
	  const projection = d3.geoIdentity()
		.fitSize([width, height], feature(topojsonData, topojsonData.objects.states));
	  const path = d3.geoPath().projection(projection);
  
	  svg.selectAll('path')
		.data(feature(topojsonData, topojsonData.objects.states).features)
		.enter().append('path')
		.attr('d', path)
		// .attr('stroke', '#000')
		.attr('fill', 'none');

		svg.selectAll('.state')
			.data(feature(topojsonData, topojsonData.objects.states).features)
			.enter().append('path')
			.attr('class', 'state')
			.attr('d', path)
			.attr('stroke', 'navy')
			.attr('stroke-width', '2px')
			.attr('stroke-opacity', 1)
			.attr('fill', 'none');
	}
  
	onMount(() => {
	  drawMap();
	});
</script>

<svg id="map"></svg>