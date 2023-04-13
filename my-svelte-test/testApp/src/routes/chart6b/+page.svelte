<svelte:head>
	<title>Box Plot Chart</title>
	<meta name="description" content="About test page" />
</svelte:head>

<script>
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	  
	  const data = [
	  { group: 'A', values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
	  { group: 'B', values: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
	  { group: 'C', values: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
	  { group: 'D', values: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14] },
	  { group: 'E', values: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }
	];
	  onMount(() => {
	  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
	  const width = 600 - margin.left - margin.right;
	  const height = 400 - margin.top - margin.bottom;
  
	  const svg = d3.select('#chart')
		.append('svg')
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom)
		.append('g')
		.attr('transform', `translate(${margin.left}, ${margin.top})`);
  
	  const x = d3.scaleBand()
		.domain(data.map(d => d.group))
		.range([0, width])
		.padding(0.4);
  
	  const y = d3.scaleLinear()
		.domain([d3.min(data, d => d3.min(d.values)), d3.max(data, d => d3.max(d.values))])
		.range([height, 0]);
  
	  const xAxis = d3.axisBottom(x);
	  const yAxis = d3.axisLeft(y);
  
	  svg.append('g')
		.attr('transform', `translate(0, ${height})`)
		.call(xAxis);
  
	  svg.append('g')
		.call(yAxis);
  
	  svg.selectAll('.box')
		.data(data)
		.enter()
		.append('rect')
		.attr('class', 'box')
		.attr('x', d => x(d.group))
		.attr('y', d => y(d3.quantile(d.values, 0.75)))
		.attr('width', x.bandwidth())
		.attr('height', d => y(d3.quantile(d.values, 0.25)) - y(d3.quantile(d.values, 0.75)))
		.attr('fill', (d, i) => d3.schemeCategory10[i])
		.attr('stroke', 'blue')
		.attr('stroke-width', 2 );
  
	 svg.selectAll('.median')
	   .data(data)
	   .enter()
	   .append('line')
	   .attr('class', 'median')
	   .attr('x1', d => x(d.group))
	   .attr('y1', d => y(d3.median(d.values)))
	   .attr('x2', d => x(d.group) + x.bandwidth())
	   .attr('y2', d => y(d3.median(d.values)));
  
	 svg.selectAll('.whisker')
	   .data(data)
	   .enter()
	   .append('line')
	   .attr('class', 'whisker')
	   .attr('x1', d => x(d.group))
	   .attr('y1', d => y(d3.min(d.values)))
	   .attr('x2', d => x(d.group) + x.bandwidth())
	   .attr('y2', d => y(d3.min(d.values)));
  
	 svg.selectAll('.whisker')
	   .data(data)
	   .enter()
	   .append('line')
	   .attr('class', 'whisker')
	   .attr('x1', d => x(d.group))
	   .attr('y1', d => y(d3.max(d.values)))
	   .attr('x2', d => x(d.group) + x.bandwidth())
	   .attr('y2', d => y(d3.max(d.values)));
   });
  
	  
  </script>
  <div id="chart"></div>
  