const data = [
    { country: "USA", value: 120 },
    { country: "India", value: 150 },
    { country: "Japan", value: 60 },
    { country: "UK", value: 30 },
    { country: "Brazil", value: 50},
    { country: "France", value: 160}
];

  
// Create the SVG element
    const svg = d3
    .select(".chart")
    .append("svg")
    .attr("width", 500)
    .attr("height", 350);

    // Define the scales
    const xScale = d3
    .scaleBand()
    .range([0, 400])
    .padding(0.1)
    .domain(data.map(d => d.country));

    const yScale = d3
    .scaleLinear()
    .range([250, 0])
    .domain([0, d3.max(data, d => d.value)]);

    // Create the bars
    svg
    .selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => xScale(d.country))
    .attr("y", d => yScale(d.value))
    .attr("width", xScale.bandwidth())
    .attr("height", d => 250 - yScale(d.value))
    .text(d => d.value);

    // Add the country labels
    svg
    .selectAll(".country-label")
    .data(data)
    .enter()
    .append("text")
    .attr("class", "country-label")
    .attr("x", d => xScale(d.country) + xScale.bandwidth() / 2)
    .attr("y", 265)
    .text(d => d.country); // Show the name of the country