<script>
 	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';
	import Scrollbar from 'smooth-scrollbar';
	
	import { onMount } from 'svelte';

  
	import Hello from './Hello.svelte'
	import Main from './Main.svelte'
	import Goodbye from './Goodbye.svelte'
	
  
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger)
		
		const scroller = document.body;
		
		const smoothScroll = Scrollbar.init(scroller, { damping: 0.1, delegateTo: document, alwaysShowTracks: true })
		
		ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) {
        if (arguments.length) {
          smoothScroll.scrollTop = value;
        }
        return smoothScroll.scrollTop
      }
    })

		smoothScroll.addListener(ScrollTrigger.update);

		ScrollTrigger.defaults({ 
			scroller: scroller,
			pinType: 'transform'
		});		
		
		const timeline = gsap.timeline({
			scrollTrigger: {
        trigger: '.section-2',
        start: 'top top',
        end: '+=200%',
        scrub: true,
        pin: true,
        anticipatePin: 1
			}
		})
		timeline.to('.section-2 h1', { duration: 1, rotate: 360 })
		
	})
</script>


<Hello/>
<Main/>
<Goodbye/>

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
</style>