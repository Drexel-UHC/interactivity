<script>
	let data = [
		{ foo: 4, bar: 1 },
		{ foo: 6, bar: 7 },
		{ foo: 9, bar: 5 },
		{ foo: 2, bar: 4 },
		{ foo: 8, bar: 2 },
		{ foo: 9, bar: 9 },
		{ foo: 5, bar: 3 },
		{ foo: 3, bar: 8 },
		{ foo: 1, bar: 6 }
	];

	import { tweened } from 'svelte/motion';
	const tweenedX = tweened(data.map((d) => d.foo));

	const setFoo = function () {
		tweenedX.set(data.map((d) => d.foo));
	};
	const setBar = function () {
		tweenedX.set(data.map((d) => d.bar));
	};
</script>

<button on:click={setFoo}>Foo</button>
<button on:click={setBar}>Bar</button>
<p>
	Your values:
	{#each $tweenedX as x}
		{x}
	{/each}
</p>
