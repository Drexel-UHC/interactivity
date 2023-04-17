<script>
  export let size = 100; // You can set a default size for the SVG
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  width="{size}"
  height="{size}"
>
  <g>
    <!-- Body -->
    <ellipse cx="50" cy="50" rx="35" ry="25" fill="yellow" />
    <rect x="32.5" y="25" width="35" height="50" fill="black" />
    <rect x="42.5" y="25" width="15" height="50" fill="yellow" />

    <!-- Head -->
    <circle cx="25" cy="50" r="12" fill="black" />

    <!-- Eyes -->
    <circle cx="20" cy="45" r="2" fill="white" />
    <circle cx="20" cy="55" r="2" fill="white" />

    <!-- Wings -->
    <path d="M50,25 Q60,0 70,25" fill="none" stroke="lightblue" stroke-width="2" />
    <path d="M50,25 Q40,0 30,25" fill="none" stroke="lightblue" stroke-width="2" />
  </g>
</svg>
