<svelte:head>
	<title>Bar Chart 1</title>
	<meta name="description" content="About test page" />
</svelte:head>

<h1>D3 Bar Chart Example</h1>
    <div class="chart"></div>
<script>
    import { onMount } from 'svelte';
    import * as d3 from 'd3';
    
    const data = [
      { country: "USA", value: 120 },
      { country: "India", value: 150 },
      { country: "Japan", value: 60 },
      { country: "UK", value: 30 },
      { country: "Brazil", value: 50},
      { country: "France", value: 160}
    ];
  
    let svg, xScale, yScale;
  
    onMount(() => {
      // Create the SVG element
      svg = d3.select('.chart')
        .append('svg')
        .attr('width', 500)
        .attr('height', 350);
  
      // Define the scales
      xScale = d3.scaleBand()
        .range([0, 400])
        .padding(0.1)
        .domain(data.map(d => d.country));
  
      yScale = d3.scaleLinear()
        .range([250, 0])
        .domain([0, d3.max(data, d => d.value)]);
  
      // Create the bars
      svg.selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => xScale(d.country))
        .attr('y', d => yScale(d.value))
        .attr('width', xScale.bandwidth())
        .attr('height', d => 250 - yScale(d.value))
        .text(d => d.value);
  
      // Add the country labels
      svg.selectAll('.country-label')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'country-label')
        .attr('x', d => xScale(d.country) + xScale.bandwidth() / 2)
        .attr('y', 265)
        .text(d => d.country);
    });
</script>
