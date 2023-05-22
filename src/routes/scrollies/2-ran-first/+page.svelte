<script>
	import Scrolly from './Scrolly.svelte';
	import { tweened } from 'svelte/motion';
	let number = tweened(0);
	$: if (currentStep == 0) {
		number.set(100);
	} else if (currentStep == 1) {
		number.set(200);
	} else if (currentStep == 2) {
		number.set(300);
	}
	let currentStep;
</script>

<section>
	<div class="sticky"><h1>{Math.round($number)}</h1></div>
	<Scrolly bind:value={currentStep}>
		{#each [1, 2, 3] as text, i}
			<div class="step" class:active={currentStep === i}>
				<div class="step-content">
					<p>Step {text}</p>
				</div>
			</div>
		{/each}
	</Scrolly>
</section>

<style>
	.step {
		height: 80vh;
		display: flex;
		place-items: center;
		justify-content: center;
	}

	.step-content {
		background: whitesmoke;
		color: #ccc;
		padding: 0.5rem 1rem;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
		transition: background 500ms ease, color 500ms ease;
	}

	.step.active .step-content {
		background: red;
		color: black;
	}

	.sticky {
		position: fixed;
	}
</style>
