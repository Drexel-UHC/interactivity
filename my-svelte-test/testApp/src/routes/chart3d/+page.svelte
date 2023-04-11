<svelte:head>
	<title>Bar Chart 3b</title>
	<meta name="description" content="About test page" />
</svelte:head>

<h1>D3 Line Chart Example</h1>
<script>
    import { onMount } from 'svelte';
    import * as d3 from 'd3';
  
    let data = [
      { 
        group: 'A', values: [
            { x: 0, y: 20 }, 
            { x: 1, y: 50 }, 
            { x: 2, y: 30 }, 
            { x: 3, y: 60 },
            { x: 7, y: 76 },
            { x: 5, y: 30 },
        ] 
    },
      { 
        group: 'B', values: [
            { x: 0, y: 30 }, 
            { x: 1, y: 40 }, 
            { x: 2, y: 10 }, 
            { x: 3, y: 50 },
            { x: 7, y: 86 },
            { x: 5, y: 90 },
        ] 
    },
    ];
  
    let selectedGroup = 'A';
  
    let margin = { top: 20, right: 20, bottom: 30, left: 50 };
    let width = 600 - margin.left - margin.right;
    let height = 400 - margin.top - margin.bottom;
  
    let x = d3.scaleLinear().range([0, width]);
    let y = d3.scaleLinear().range([height, 0]);
  
    let xAxis = d3.axisBottom(x);
    let yAxis = d3.axisLeft(y);
  
    let line = d3.line()
      .x(d => x(d.x))
      .y(d => y(d.y))
      .curve(d3.curveCardinal);
  
    let svg;
    let xAxisEl;
    let yAxisEl;
    let lineGroup;
    let circleGroup;
  
    onMount(() => {
      svg = d3.select('#chart')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
  
      xAxisEl = svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', `translate(0,${height})`);
  
      yAxisEl = svg.append('g')
        .attr('class', 'y axis');
  
      lineGroup = svg.append('g')
        .attr('class', 'line-group');
  
      circleGroup = svg.append('g')
        .attr('class', 'circle-group');
  
      updateChart();
    });
  
    function updateChart() {
      let selectedData = data.find(d => d.group === selectedGroup);
  
      x.domain(d3.extent(selectedData.values, d => d.x));
      y.domain([0, d3.max(selectedData.values, d => d.y)]);
  
      xAxisEl.transition()
        .duration(500)
        .call(xAxis);
  
      yAxisEl.transition()
        .duration(500)
        .call(yAxis);
  
      let lines = lineGroup.selectAll('.line')
        .data([selectedData]);
  
      lines.enter().append('path')
        .attr('class', 'line')
        .attr('d', d => line(d.values))
        .attr('fill', 'none')
        .attr('stroke', 'black')
        .merge(lines)
        .transition()
        .duration(500)
        .attr('d', d => line(d.values));
  
      lines.exit()
        .transition()
        .duration(500)
        .style('opacity', 0)
        .remove();
  
      let circles = circleGroup.selectAll('.circle')
        .data(selectedData.values);
  
      circles.enter().append('circle')
        .attr('class', 'circle')
        .attr('cx', d => x(d.x))
        .attr('cy', d => y(d.y))
        .attr('r', 0)
        .attr('fill', 'black')
        .merge(circles)
        .transition()
        .duration(500)
        .attr('cx', d => x(d.x))
        .attr('cy', d => y(d.y))
        .attr('r', 6)
        .attr('fill', 'purple');

        circles.exit()
        .transition()
        .duration(500)
        .attr('r', 0)
        .remove();
        }

        function switchGroup() {
        selectedGroup = selectedGroup === 'A' ? 'B' : 'A';
        updateChart();
        }
</script>
  
  
<div id="chart"></div>
<div>
	<button on:click={() => { selectedGroup = 'A'; updateChart(); }}>Group A</button>
	<button on:click={() => { selectedGroup = 'B'; updateChart(); }}>Group B</button>
</div>

<style>
	button {
		margin: 10px;
		padding: 10px;
		font-size: 20px;
		width: 100%;
		max-width: 100px;
	}
</style>
  
  