<svelte:head>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollTrigger.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/smooth-scrollbar/8.6.1/smooth-scrollbar.js" integrity="sha512-3Csz15JaSnj/L3/crtY2nJ0SJusskVc+wjv6qqC31RKV+JRLnV0kXZhodM+pkOKT71UZjJauQjSJuErMsrro+g==" crossorigin="anonymous"></script>
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
      scrollTrigger: {
        trigger: ".square",
        markers: true,
        // start: 400
        start: "top 30%",
    
      }
    })

  });
</script>

<h1>hi</h1>
<div class="div1"> </div>
<div class="div2"> 
  <div bind:this={myElement} class="square"></div>
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

  .red {
    background-color: red;
  }

  .blue {
    background-color: blue;
  }

</style>