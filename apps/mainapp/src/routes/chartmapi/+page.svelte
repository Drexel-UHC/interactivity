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
  
	const zoomToState = (state) => {
	  if (state === 'All States') {
		projection = d3.geoIdentity().fitSize([width, height], feature(topojsonData, topojsonData.objects.states));
	  } else {
		const stateFeature = feature(topojsonData, topojsonData.objects.states).features.find(f => f.properties.name === state);
		projection = d3.geoIdentity().fitSize([width, height], stateFeature);
	  }
  
	  const path = d3.geoPath().projection(projection);
  
	  d3.selectAll('.state')
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
  
		// const colorScale = d3.scaleSequential()
		// 	.domain(d3.extent(counties, d => d.properties.data))
		// 	.interpolator(d3.interpolateBlues);
	
		svg.selectAll('path')
			.data(feature(topojsonData, topojsonData.objects.states).features)
			.enter().append('path')
			.attr('d', path)
			.attr('fill', 'none');
  
	  	zoomToState(selectedState);
  
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
	$: {
	  zoomToState(selectedState);
	}
</script>

<svg id="map"></svg>

<select bind:value={selectedState}>
	<option value="All States">All States</option>
	<option value="Texas">Texas</option>
	<option value="California">California</option>
	<option value="Utah">Utah</option>
	<option value="New York">New York</option>
	<option value="Florida">Florida</option>
	<option value="Illinois">Illinois</option>
</select>
