<svelte:head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollToPlugin.min.js"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';
	import Hello from './Hello.svelte'
	import Main from './Main.svelte'
	import Goodbye from './Goodbye.svelte'
		
  let myElement;

 const rotateElement = () => {
    gsap.to(myElement, {
      rotation: '+=360',
      duration: 2,
      ease: 'none',
    });
  };

   onMount(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.create({
      trigger: ".trigger_element",
      markers: true,
      start: "top center",
      onEnter: rotateElement,
      onEnterBack: rotateElement,
      onLeaveBack: rotateElement,
    });
  })
</script>


<Hello/>
 <section class="section-2">
	<h1  bind:this={myElement} class='trigger_element'> The world is yours.</h1>
</section>
<Goodbye />
 
<style>
	:global(body) {
		padding: 0;
	}
	
	:global(section) {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
	}


  .section-2 {
		background: lightgrey;
	}
	
	.section-2 h1 {
		color: teal;
	}


</style>