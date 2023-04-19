<svelte:head>
	<title>Map E</title>
	<meta name="description" content="map page" />
</svelte:head>

<script>
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	import { feature } from 'topojson-client';
	import topojsonData from '../../components/us-states-new.json';
  
	const width = 960;
	const height = 600;
	const legendWidth = 200;
	const legendHeight = 20;
	const legendMargin = 20;
	
	const counties = feature(topojsonData, topojsonData.objects.counties).features;
	counties.forEach(d => {
		d.properties.data = Math.floor(Math.random() * 1000);
	});

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
		// .attr('stroke', '#000')
    	// .attr('stroke-width', '3px')
		.attr('fill', 'none');

    svg.selectAll('.county')
		.data(counties)
		.enter().append('path')
		.attr('class', 'county')
		.attr('d', path)
		.attr('stroke', 'lightblue')
		.attr('stroke-width', '1px')
		.attr('fill', d => colorScale(d.properties.data))
		.attr('fill-opacity', 0.5)
		.on('mouseover', function(event, d) {
			const tooltip = d3.select('#tooltip');
			tooltip.html(`County: ${d.properties.name}<br>Data: ${d.properties.data}`);
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

		const legend = svg.append('g')
			.attr('transform', `translate(${width - legendWidth - legendMargin}, ${legendMargin})`);

		const legendScale = d3.scaleLinear()
			.domain(d3.extent(counties, d => d.properties.data))
			.range([0, legendWidth]);

		const legendAxis = d3.axisBottom(legendScale)
			.ticks(5)
			.tickSize(legendHeight);

		legend.append('g')
			.call(legendAxis)
			.attr('transform', `translate(0, ${legendHeight})`);

		const gradient = legend.append('defs')
			.append('linearGradient')
			.attr('id', 'gradient')
			.attr('x1', '0%')
			.attr('y1', '0%')
			.attr('x2', '100%')
			.attr('y2', '0%');

		gradient.append('stop')
			.attr('offset', '0%')
			.attr('stop-color', colorScale.range()[0]);

		gradient.append('stop')
			.attr('offset', '100%')
			.attr('stop-color', colorScale.range()[1]);

		legend.append('rect')
			.attr('x', 0)
			.attr('y', 0)
			.attr('width', legendWidth)
			.attr('height', legendHeight)
			.attr('fill', 'url(#gradient)');

		svg.append('text')
			.attr('x', width - legendWidth - legendMargin)
			.attr('y', legendMargin + legendHeight + 5)
			.text('Number of Data Points')
			.style('text-anchor', 'middle')
			.style('font-size', '12px')
			.style('font-weight', 'bold');

	}
  
	onMount(() => {
	  drawMap();
	});
</script>

<svg id="map"></svg>

<div id="tooltip" style="display: none;"></div>
