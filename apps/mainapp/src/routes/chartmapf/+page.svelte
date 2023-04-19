<svelte:head>
	<title>Map F</title>
	<meta name="description" content="map page" />
</svelte:head>

<script>
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	import { feature } from 'topojson-client';
	import topojsonData from '../../components/us-states.json';
  
	const width = 960;
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
    	// .attr('stroke-width', '3px')
		.attr('fill', 'none');

    svg.selectAll('.county')
		.data(feature(topojsonData, topojsonData.objects.counties).features)
		.enter().append('path')
		.attr('class', 'county')
		.attr('d', path)
		.attr('stroke', 'lightblue')
		.attr('stroke-width', '1px')
		.attr('fill', 'DarkSlateBlue')
		.attr('fill-opacity', 0.5)
		.on('mouseover', function(event, d) {
			const tooltip = d3.select('#tooltip');
			tooltip.html(`County: ${d.properties.name}<br>Data: ${Math.floor(Math.random() * 100)}`);
			tooltip.style('display', 'block');
			tooltip.style('left', `${event.pageX + 10}px`);
			tooltip.style('top', `${event.pageY - 10}px`);
			tooltip.style('font-size', '12px');
			tooltip.style('background-color', 'Bisque');
			tooltip.style('padding', '5px');
			tooltip.style('border', '1px solid black');
			tooltip.style('border-radius', '5px');
			tooltip.style('position', 'absolute');
			tooltip.style('z-index', '9999');
			tooltip.style('opacity', '1');
			tooltip.style('width', `${Math.sqrt(d.properties.value) * 5}px`);
			tooltip.style('height', `${Math.sqrt(d.properties.value) * 5}px`);
			})
		.on('mouseout', function(event, d) {
			const tooltip = d3.select('#tooltip');
			tooltip.style('display', 'none');
        });

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

<div id="tooltip" style="display: none;"></div>
