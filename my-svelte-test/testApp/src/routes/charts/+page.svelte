<script>
    import data from "../../data/data.js";
    console.log(data);
    let height = 500;
    let width = 500;

    import { scaleLinear } from "d3-scale";
    const xScale = scaleLinear()
    .domain([0, 100])
    .range([0, width]);

    import { max } from "d3-array";
    const yScale = scaleLinear()
    .domain([0, 100])
    .range([height, 0]);
    

</script>

<svelte:head>
	<title>My data charts</title>
	<meta name="description" content="Chart page" />
</svelte:head>

<svg width={width} height={height}>
    {#each data as student}
        <circle cx={xScale(student.age)} cy={yScale(student.grade)} r="10" fill="red" stroke="black" /> 
    {/each}
</svg>