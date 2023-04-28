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
  
	let selectedState = 'All States';
	let projection;
	let stateColor = 'lightgray';
  
	const zoomToState = (state) => {
		if (state === 'All States') {
			projection = d3.geoIdentity().fitSize([width, height], feature(topojsonData, topojsonData.objects.states));
			d3.selectAll('.county').style('display', 'none');
			d3.select('.state-label').text('');
		} else {
			const stateFeature = feature(topojsonData, topojsonData.objects.states).features.find(f => f.properties.name === state);
			projection = d3.geoIdentity().fitSize([width, height], stateFeature);
			d3.selectAll('.county').style('display', null);
			d3.select('.state-label').text(state);
		}
		if (state !== 'All States') {
			stateColor = 'Indigo';
		}

	  	const path = d3.geoPath().projection(projection);
  
		d3.selectAll('.state')
			.transition()
			.duration(750)
		    .attr('d', path)
			.attr('fill', (d) => {
			if (d.properties.name === state) {
				return stateColor;
			} else {
				return 'salmon';
			}
			});

		d3.selectAll('.county')
			.transition()
			.duration(750)
			.attr('d', path);
	};
  
	function drawMap() {
		const svg = d3.select('#map')
			.attr('width', width)
			.attr('height', height);
	
		const projection = d3.geoIdentity()
			.fitSize([width, height], feature(topojsonData, topojsonData.objects.states));
		const path = d3.geoPath().projection(projection);

		svg.selectAll('.state')
			.data(feature(topojsonData, topojsonData.objects.states).features)
			.enter().append('path')
			.attr('class', 'state')
			.attr('d', path)
			.attr('stroke', 'navy')
			.attr('stroke-width', '2px')
			.attr('stroke-opacity', 1)
			.attr('fill', 'none');

		svg.selectAll('.county')
			.data(counties)
			.enter().append('path')
			.attr('class', 'county')
			.attr('d', path)
			.attr('stroke', 'coral')
			.attr('stroke-width', '1px')
			.attr('stroke-opacity', 1)
			.attr('fill', 'none')
			.style('display', 'none');
		
		svg.append('text')
			.attr('class', 'state-label')
			.attr('x', 20)
			.attr('y', 20)
			.attr('fill', 'darkred')
			.attr('font-size', 20)
			.attr('font-weight', 'bold');

		zoomToState(selectedState);
	}
	onMount(() => {
	  drawMap();
	});
</script>

<svg id="map"></svg>
<select bind:value={selectedState} on:change={() => zoomToState(selectedState)}>
	<option value="All States">All States</option>
	<option value="Texas">Texas</option>
	<option value="California">California</option>
	<option value="Utah">Utah</option>
	<option value="New York">New York</option>
	<option value="Florida">Florida</option>
	<option value="Illinois">Illinois</option>
  </select>
<style>
	select {
		margin: 10px;
		padding: 10px;
		font-size: 20px;
		width: 100%;
		max-width: 200px;
		border-radius: 10px;
		border: 2px solid DeepSkyBlue;
		background-color: lightblue;
	}
	option {
		font-size: 20px;
		text-align: center;
	}
</style>
