<svelte:head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollToPlugin.min.js"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';

  let myElement;

  onMount(() => {
    gsap.to(myElement, {
      duration: 1,
      color: ['#ff0000'], // An array of colors to tween between
      repeat: -1, // Repeat indefinitely
      yoyo: true // Reverse the tween on each repeat
    });
  });
</script>

<div bind:this={myElement}>
  <h1>Hello world!</h1>
</div>