<script>
  export let size = 100; // You can set a default size for the SVG
  export let fillColor = "black"; // You can set a default fill color for the SVG
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  width="{size}"
  height="{size}"
  fill="{fillColor}"
>
  <g>
    <!-- Ears -->
    <path d="M20,30 Q15,10 30,15" />
    <path d="M80,30 Q85,10 70,15" />

    <!-- Head -->
    <circle cx="50" cy="45" r="20" />

    <!-- Eyes -->
    <circle cx="40" cy="40" r="2" />
    <circle cx="60" cy="40" r="2" />

    <!-- Nose -->
    <path d="M50,45 Q50,48 48,50 Q50,48 52,50" />

    <!-- Whiskers -->
    <path d="M30,55 Q45,55 60,55" />
    <path d="M30,58 Q45,58 60,58" />
    <path d="M30,61 Q45,61 60,61" />
  </g>
</svg>

<style>
  path,
  circle {
    stroke: currentColor;
  }
</style>
