<svelte:head>
	<title>Map G</title>
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
	counties.forEach(d => {
	  d.properties.data1 = Math.floor(Math.random() * 1000);
	  d.properties.data2 = Math.floor(Math.random() * 1000);
	});
	
	const dataOptions = [
	  { value: 'data1', label: 'Data 1' },
	  { value: 'data2', label: 'Data 2' },
	];
	
	let selectedData = dataOptions[0].value;
	
	let svg;
	let colorScale;
	
	function updateMap() {
		if (selectedData === 'data1') {
		colorScale = d3.scaleSequential()
		.domain(d3.extent(counties, d => d.properties.data1))
		.interpolator(d3.interpolateBlues);
		
		// set color of gradient to match color scale
		const colorGradient = d3.select('#colorGradient');
		colorGradient.select('stop:nth-child(1)').attr('stop-color', '#f7fbff');
		colorGradient.select('stop:nth-child(2)').attr('stop-color', '#4292c6');
		colorGradient.select('stop:nth-child(3)').attr('stop-color', '#08306b');
		}
		else if (selectedData === 'data2') {
		colorScale = d3.scaleSequential()
		.domain(d3.extent(counties, d => d.properties.data2))
		.interpolator(d3.interpolateOranges);
		
		// set color of gradient to match color scale
		const colorGradient = d3.select('#colorGradient');
		colorGradient.select('stop:nth-child(1)').attr('stop-color', '#fff5eb');
		colorGradient.select('stop:nth-child(2)').attr('stop-color', '#fd8d3c');
		colorGradient.select('stop:nth-child(3)').attr('stop-color', '#e6550d');
		}
	  
		svg.selectAll('.county')
			.transition()
    		.duration(1000)
			.attr('fill', d => colorScale(d.properties[selectedData]))
			.attr('fill-opacity', 0.5);
	}
	
	function drawMap() {
		svg = d3.select('#map')
			.attr('width', width)
			.attr('height', height);
	  
		const projection = d3.geoIdentity()
			.fitSize([width, height], feature(topojsonData, topojsonData.objects.states));
		const path = d3.geoPath().projection(projection);
	
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
			.attr('stroke', 'lightblue')
			.attr('stroke-width', '1px')
			.attr('fill-opacity', 0.5)
			.on('mouseover', function(event, d) {
		  	const tooltip = d3.select('#tooltip');
		  	tooltip.html(`County: ${d.properties.name}<br>Data: ${d.properties[selectedData]}`);
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
  
  updateMap();
  }
  
  onMount(() => {
  drawMap();
  });
</script>

<svg id="map"></svg>
<svg id="legend" width="200" height="60">
	<rect x="10" y="10" width="180" height="20" fill="url(#colorGradient)" />
	<text x="10" y="50">Low</text>
	<text x="160" y="50">High</text>
	<defs>
		<linearGradient id="colorGradient">
			<stop offset="0%" stop-color="#f7fbff" />
			<stop offset="50%" stop-color="#4292c6" />
			<stop offset="100%" stop-color="#08306b" />
		</linearGradient>
	</defs>
</svg>

<div id="tooltip"></div>

<select id="data-select" bind:value={selectedData} on:change={updateMap}>
	{#each dataOptions as option}
		<option value={option.value} selected={selectedData === option.value}>{option.label}</option>
	{/each}
</select>  


<style>
	#tooltip {
		display: none;
	}
	select {
		margin: 10px;
		padding: 10px;
		font-size: 20px;
		width: 100%;
		max-width: 150px;
	}
	option {
		font-size: 20px;
		text-align: center;
	}
</style>
  