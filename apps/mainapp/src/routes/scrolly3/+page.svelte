<svelte:head>
	<title>Box Plot Chart</title>
	<meta name="description" content="About test page" />
	
</svelte:head>

<script>
	import * as d3 from "d3";
	import { onMount } from "svelte";
	import gsap from "gsap";
	import ScrollTrigger from "gsap/ScrollTrigger";
  	gsap.registerPlugin(ScrollTrigger);

  	let selectedData = 1;
	const data1 = [
		{ x: 'A', y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
		{ x: 'B', y: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
		{ x: 'C', y: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
		{ x: 'D', y: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14] },
		{ x: 'E', y: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }
	];
	const data2 = [
		{ x: 'F', y: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] },
		{ x: 'G', y: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19] },
		{ x: 'H', y: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30] },
		{ x: 'I', y: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] },
		{ x: 'J', y: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19] }
	];

	onMount(() => {
		drawBoxPlot(data1);

		// create the scroll trigger
		ScrollTrigger.create({
		trigger: "#chart",
		start: "top center",
		endTrigger: "#section3",
		end: "top center",
		scrub: true,
		markers: true,
		onUpdate: self => {
			const progress = self.progress;
			if (progress < 0.5) {
			if (selectedData !== 1) {
				selectedData = 1;
				animateDataTransition(data2, data1);
			}
			} else {
			if (selectedData !== 2) {
				selectedData = 2;
				animateDataTransition(data1, data2);
			}
			}
		}
		});
	});
	function animateDataTransition(fromData, toData) {
		const transitionDuration = 1; // Duration of the transition animation in seconds

		// Animate the position of the existing chart elements
		gsap.to("#chart .box, #chart .whisker, #chart .median", {
			y: "-=50", // Move the boxes up by 50 units
			duration: transitionDuration / 2,
			onComplete: () => {
			// Remove the existing chart elements
			d3.select("#chart svg").remove();

			// Draw the new chart
			drawBoxPlot(toData);

			// Position the new chart elements below the viewport
			gsap.set("#chart .box, #chart .whisker, #chart .median", { y: "+=50" });

			// Animate the position of the new chart elements back to their original position
			gsap.to("#chart .box, #chart .whisker, #chart .median", {
				y: "0",
				duration: transitionDuration / 2,
			});
			},
		});
		}

	function drawBoxPlot(data) {
		d3.select("#chart svg").remove();

		const margin = { top: 10, right: 30, bottom: 30, left: 40 };
		const width = 500 - margin.left - margin.right;
		const height = 400 - margin.top - margin.bottom;

		const svg = d3
			.select("#chart")
			.append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		const x = d3.scaleBand()
		.range([0, width]).domain(data.map(d => d.x)).padding(0.4);
		const y = d3.scaleLinear().range([height, 0]).domain([0, d3.max(data, d => d3.max(d.y))]);

		svg.append("g").call(d3.axisLeft(y));
		svg.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x));

		// Draw the box plot
		svg.selectAll()
			.data(data)
			.enter()
			.append("rect")
			.attr('class', 'box')
			.attr('x', d => x(d.x))
			.attr('y', d => y(d3.quantile(d.y, 0.75)))
			.attr('width', x.bandwidth())
			.attr('height', d => y(d3.quantile(d.y, 0.25)) - y(d3.quantile(d.y, 0.75)))
			// .attr("width", boxWidth)
			.attr('fill', (d, i) => d3.schemeCategory10[i])
			.attr('stroke', 'blue')
			.attr('stroke-width', 2 );
		
		// Draw the median line
		svg.selectAll()
			.data(data)
			.enter()
			.append("line")
			.attr("x1", d => x(d.x))
			.attr("y1", d => y(d3.median(d.y)))
			.attr("x2", d => x(d.x) + x.bandwidth())
			.attr("y2", d => y(d3.median(d.y)))
			.attr("stroke", "black")
			.attr("stroke-width", 2)
			.attr("class", "median");
		// Draw the upper whisker
		svg.selectAll()
			.data(data)
			.enter()
			.append("line")
			.attr("x1", d => x(d.x) + x.bandwidth() / 2)
			.attr("y1", d => y(d3.quantile(d.y, 0.75)))
			.attr("x2", d => x(d.x) + x.bandwidth() / 2)
			.attr("y2", d => y(d3.max(d.y)))
			.attr("stroke", "black")
			.attr("stroke-width", 2)
			.attr("class", "whisker");

		// Draw the lower whisker
		svg.selectAll()
			.data(data)
			.enter()
			.append("line")
			.attr("x1", d => x(d.x) + x.bandwidth() / 2)
			.attr("y1", d => y(d3.quantile(d.y, 0.25)))
			.attr("x2", d => x(d.x) + x.bandwidth() / 2)
			.attr("y2", d => y(d3.min(d.y)))
			.attr("stroke", "black")
			.attr("stroke-width", 2)
			.attr("class", "whisker");
	}
</script>

<div id="section1"></div>
<div id="section2">
	<div id="chart"></div>
</div>
<div id="section3"></div>
<style>
	#section1 {
		height: 100vh;
		background-color: coral;
	}
	#section2 {
		height: 100vh;
		background-color: indianred;
	}
	#section3 {
		height: 100vh;
		background-color: salmon;
	}
</style>