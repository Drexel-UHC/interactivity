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
		.attr('stroke', '#000')
		.attr('fill', 'none');
	}
  
	onMount(() => {
	  drawMap();
	});
</script>

<svg id="map"></svg>
  