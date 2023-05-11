<script>
	import bar_image from '$lib/images/barchart1.png';
	import pie_image from '$lib/images/piechart1.png';
	import line_image from '$lib/images/linechart1.png';
	import dot_image from '$lib/images/dotchart1.png';
	import force_image from '$lib/images/forcechart1.png';
	import box_image from '$lib/images/boxchart1.png';
	import map_image from '$lib/images/usmap1.png';
	import blank_image from '$lib/images/blank1.png';
</script>

<svelte:head>
	<title>All charts</title>
	<meta name="description" content="About test page" />
</svelte:head>


<div class="main-chart-box">
	<div class="small-boxes">
		<div class="inner-box">
			<a href="../chart1">
				<img class="mytest-image" src={bar_image} alt="chart 1" />
				<h1 class="box-title">Bar Chart</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chart2">
				<img class="mytest-image" src={pie_image} alt="chart 2" />
				<h1 class="box-title">Pie Chart</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chart3">
				<img class="mytest-image" src={line_image} alt="chart 3" />
				<h1 class="box-title">Line chart</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chart3b">
				<img class="mytest-image" src={line_image} alt="chart 3 B" />
				<h1 class="box-title">Line chart B</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chart3c">
				<img class="mytest-image" src={line_image} alt="chart 3 C" />
				<h1 class="box-title">Line chart C</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chart3d">
				<img class="mytest-image" src={line_image} alt="chart 3 D" />
				<h1 class="box-title">Line chart D</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chart4">
				<img class="mytest-image" src={dot_image} alt="chart 4" />
				<h1 class="box-title">Dot Chart</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chart4b">
				<img class="mytest-image" src={dot_image} alt="chart 4 B" />
				<h1 class="box-title">Dot Chart B</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chart5">
				<img class="mytest-image" src={force_image} alt="chart 5" />
				<h1 class="box-title">Force D Chart</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chart6">
				<img class="mytest-image" src={box_image} alt="chart 6" />
				<h1 class="box-title">Box Plot</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chart6b">
				<img class="mytest-image" src={box_image} alt="chart 6 B" />
				<h1 class="box-title">Box Plot B</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chartmap">
				<img class="mytest-image" src={map_image} alt="chart Map" />
				<h1 class="box-title">Map A</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chartmapb">
				<img class="mytest-image" src={map_image} alt="chart Map" />
				<h1 class="box-title">Map B</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chartmapc">
				<img class="mytest-image" src={map_image} alt="chart Map" />
				<h1 class="box-title">Map C</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chartmapd">
				<img class="mytest-image" src={map_image} alt="chart Map" />
				<h1 class="box-title">Map D</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chartmape">
				<img class="mytest-image" src={map_image} alt="chart Map" />
				<h1 class="box-title">Map E</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chartmapf">
				<img class="mytest-image" src={map_image} alt="chart Map" />
				<h1 class="box-title">Map F</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chartmapg">
				<img class="mytest-image" src={map_image} alt="chart Map" />
				<h1 class="box-title">Map G</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chartmaph">
				<img class="mytest-image" src={map_image} alt="chart Map" />
				<h1 class="box-title">Map H</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chartmapi">
				<img class="mytest-image" src={map_image} alt="chart Map" />
				<h1 class="box-title">Map I</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chartmapj">
				<img class="mytest-image" src={map_image} alt="chart Map" />
				<h1 class="box-title">Map J</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chartmapk">
				<img class="mytest-image" src={map_image} alt="chart Map" />
				<h1 class="box-title">Map K</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../gsap4">
				<img class="mytest-image" src={blank_image} alt="chart Map" />
				<h1 class="box-title">Scrolly-template</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../scrolly1">
				<img class="mytest-image" src={blank_image} alt="chart Map" />
				<h1 class="box-title">Scrolly</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../scrolly2">
				<img class="mytest-image" src={blank_image} alt="chart Map" />
				<h1 class="box-title">Scrolly 2</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../scrolly3">
				<img class="mytest-image" src={line_image} alt="chart 3 D" />
				<h1 class="box-title">Scrolly 3</h1>
			</a>
		</div>
	</div>
</div>

<style>

	a {
		text-decoration: none;
		color: #4d9aff;
	}

	.main-chart-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 30px;
		background-color: #ff515139;
	}
	.small-boxes {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
	}
	.inner-box{
		border-radius: 30px;
		background-color: #ffffff;
		margin: 10px;
	}
	.mytest-image {
		width: 100%;
		max-width: 250px;
		padding: 10px;
	}
</style>