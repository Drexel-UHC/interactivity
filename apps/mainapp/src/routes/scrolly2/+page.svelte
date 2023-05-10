<svelte:head>
  <title>New Scrolly</title>
  <meta name="description" content="Scrolly page" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollToPlugin.min.js"></script>
</svelte:head>

<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll(".section");
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    sections.forEach((section) => {
      const sectionHeight = section.clientHeight;
      const tween = tl.fromTo(
        section,
        { y: -sectionHeight, opacity: 0 },
        { y: 0, opacity: 1 }
      );

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        animation: tween,
        scrub: true,
        markers: true,
      });
    });
  });
</script>

<style>
  .section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }
</style>

<main>
  <div class="section" style="background-color: #f8d7da">
    Section 1
  </div>
  <div class="section" style="background-color: #fff3cd">
    Section 2
  </div>
  <div class="section" style="background-color: #d1ecf1">
    Section 3
  </div>
  <div class="section" style="background-color: #d4edda">
    Section 4
  </div>
</main>
