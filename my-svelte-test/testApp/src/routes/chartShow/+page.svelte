<script>
	import test_logo from '$lib/images/nike-test-shoes.png';
	import bar_image from '$lib/images/barchart1.png';
</script>

<svelte:head>
	<title>All charts</title>
	<meta name="description" content="About test page" />
</svelte:head>


<div class="main-chart-box">
	<div class="small-boxes">
		<div class="inner-box">
			<a href="../chart1">
				<img class="mytest-nike" src={bar_image} alt="chart 1" />
				<h1 class="box-title">Bar Chart</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chart2">
				<img class="mytest-nike" src={bar_image} alt="chart 2" />
				<h1 class="box-title">hello</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chart3">
				<img class="mytest-nike" src={bar_image} alt="chart 3" />
				<h1 class="box-title">hello</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chart4">
				<img class="mytest-nike" src={bar_image} alt="chart 4" />
				<h1 class="box-title">hello</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chart5">
				<img class="mytest-nike" src={bar_image} alt="chart 5" />
				<h1 class="box-title">hello</h1>
			</a>
		</div>
		<div class="inner-box">
			<a href="../chart6">
				<img class="mytest-nike" src={bar_image} alt="chart 6" />
				<h1 class="box-title">hello</h1>
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
	.mytest-nike {
		width: 100%;
		max-width: 300px;
	}
</style>