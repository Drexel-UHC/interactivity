<svelte:head>
	<title>Map EI</title>
	<meta name="description" content="map page" />
</svelte:head>

<script>
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	import { feature } from 'topojson-client';
	import topojsonData from '../../components/us-states-new.json';
  
	const width = 960;
	const height = 600;
	
	const counties = feature(topojsonData, topojsonData.objects.counties).features;
	function drawMap() {
		const svg = d3.select('#map')
			.attr('width', width)
			.attr('height', height);
  
		const projection = d3.geoIdentity()
			.fitSize([width, height], feature(topojsonData, topojsonData.objects.states));
		const path = d3.geoPath().projection(projection);

		const colorScale = d3.scaleSequential()
			.domain(d3.extent(counties, d => d.properties.data))
			.interpolator(d3.interpolateBlues);
  
		svg.selectAll('path')
			.data(feature(topojsonData, topojsonData.objects.states).features)
			.enter().append('path')
			.attr('d', path)
			.attr('fill', 'none');

		svg.selectAll('.county')
			.data(counties)
			.enter().append('path')
			.attr('class', 'county')
			.attr('d', path)
			.attr('stroke', 'Crimson')
			.attr('stroke-width', '1px')
			.attr('fill', 'salmon')
			.attr('fill-opacity', 0.5)

		svg.selectAll('.state')
			.data(feature(topojsonData, topojsonData.objects.states).features)
			.enter().append('path')
			.attr('class', 'state')
			.attr('d', path)
			.attr('stroke', 'navy')
			.attr('stroke-width', '2px')
			.attr('stroke-opacity', 1)
			.attr('fill', 'none');

			svg.selectAll('.state-label')
			.data(feature(topojsonData, topojsonData.objects.states).features)
			.enter().append('text')
			.attr('class', 'state-label')
			.attr('x', d => path.centroid(d)[0])
			.attr('y', d => path.centroid(d)[1])
			.text(d => d.properties.name)
			.style('text-anchor', 'middle')
			.style('font-size', '12px')
			.style('fill', 'black')
			.style('font-weight', 'bold');
	}
  
	onMount(() => {
	  drawMap();
	});
</script>

<svg id="map"></svg>

<div id="tooltip" style="display: none;"></div>
