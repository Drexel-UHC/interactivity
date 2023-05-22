<svelte:head>
	<title>Map J</title>
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
		d.properties.data = Math.floor(Math.random() * 100);
	});
  
	let selectedState = 'All States';
	let projection;
	let stateColor = 'indigo';
	
	function associateCountiesWithStates(counties, states) {
		const stateById = new Map(states.features.map(d => [d.id, d.properties.name]));
		counties.forEach(county => {
			county.properties.state = stateById.get(county.id.slice(0, 2));
		});
		}

  
	const zoomToState = (state) => {
		if (state === 'All States') {
			projection = d3.geoIdentity().fitSize([width, height], feature(topojsonData, topojsonData.objects.states));
			d3.selectAll('.county').style('display', 'none');
			d3.select('.state-label').text('');
		} else {
			const stateFeature = feature(topojsonData, topojsonData.objects.states).features.find(f => f.properties.name === state);
    		projection = d3.geoIdentity().fitSize([width, height], stateFeature);
    		d3.selectAll('.county').style('display', (d) => d.properties.state === state ? null : 'none');
    		d3.select('.state-label').text(state);
		}
		if (state !== 'All States') {
			stateColor = 'indigo';
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

		const colorScale = d3.scaleSequential()
		.domain(d3.extent(counties, d => d.properties.data))
		.interpolator(d3.interpolateBlues);

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
			.attr('fill', d => colorScale(d.properties.data))
			.attr('fill-opacity', 1)
			.style('display', 'none')
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
		associateCountiesWithStates(counties, feature(topojsonData, topojsonData.objects.states));
		drawMap();
	});
</script>

<svg id="map"></svg>
<div id="tooltip" style="display: none;"></div>
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
