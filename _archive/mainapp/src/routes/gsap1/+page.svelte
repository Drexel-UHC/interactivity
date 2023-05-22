<svelte:head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollToPlugin.min.js"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';

  let myElement;

  onMount(() => {
  
    // ensure GSAP library and ScrollTrigger plugin work together
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(myElement, {
      x: 300,
      duration: 2,
      scrollTrigger: ".square1"
    })

  });
</script>

<h1>hi</h1>
<div class="div1"> </div>
<div class="div2"> 
  <div bind:this={myElement} class="square"></div>
  <div class="square1"></div>
</div>

<style>
  .div1 {
    height: 100vh;
    background-color: pink;
  }
  .div2 {
    height: 100vh;
    background-color: salmon;
  }

  .square {
    width: 150px;
    height: 150px;
    background-color: fuchsia;
  }
  .square1 {
    width: 150px;
    height: 150px;
    margin-top: 300px;
    background-color: blue;
  } 

</style>