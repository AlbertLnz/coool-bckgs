<script>
  import { onMount } from "svelte"

  // const loop = false
  let paths = []
  let activeIndex = -1

  onMount(() => {
    const body = document.body;
    body.style.backgroundColor = 'transparent';

    paths = document.querySelectorAll(".circle-lines-background svg path")

    startAnimation()
  })

  function startAnimation() {
    if (!paths.length) return

    const highlightPaths = () => {
      paths.forEach((path, index) => {
        path.style.transition = "stroke 1s, stroke-width 1s"
        path.style.stroke = "#4A3AFF"
        path.style.strokeWidth = "1"
      })

      activeIndex = (activeIndex + 1) % paths.length

      const activePath = paths[activeIndex]
      activePath.style.stroke = "#FFD700"
      activePath.style.strokeWidth = "1"
    }

    setInterval(highlightPaths, 2000)
  }
</script>


<div class="circle-lines-background">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4276 4276" fill="none">
    <path stroke="#4A3AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M2138 4273c1179.13 0 2135-955.87 2135-2135C4273 958.872 3317.13 3 2138 3 958.872 3 3 958.872 3 2138c0 1179.13 955.872 2135 2135 2135Z"/>
    <path stroke="#4A3AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M2138 4103.09c1085.29 0 1965.09-879.8 1965.09-1965.09S3223.29 172.912 2138 172.912 172.912 1052.71 172.912 2138 1052.71 4103.09 2138 4103.09Z"/>
    <path stroke="#4A3AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M2138 3933.11c991.41 0 1795.11-803.7 1795.11-1795.11 0-991.41-803.7-1795.114-1795.11-1795.114-991.41 0-1795.113 803.704-1795.113 1795.114 0 991.41 803.703 1795.11 1795.113 1795.11Z"/>
    <path stroke="#4A3AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M2138 3763.2c897.57 0 1625.2-727.63 1625.2-1625.2S3035.57 512.799 2138 512.799 512.8 1240.43 512.8 2138 1240.43 3763.2 2138 3763.2Z"/>
    <path stroke="#4A3AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M2138 3593.23c803.7 0 1455.23-651.53 1455.23-1455.23S2941.7 682.774 2138 682.774 682.775 1334.3 682.775 2138c0 803.7 651.525 1455.23 1455.225 1455.23Z"/>
    <path stroke="#4A3AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M2138 3423.31c709.86 0 1285.31-575.45 1285.31-1285.31 0-709.86-575.45-1285.315-1285.31-1285.315-709.86 0-1285.314 575.455-1285.314 1285.315S1428.14 3423.31 2138 3423.31Z"/>
    <path stroke="#4A3AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M2138 3253.34c615.99 0 1115.34-499.36 1115.34-1115.34 0-615.99-499.35-1115.34-1115.34-1115.34-615.98 0-1115.34 499.35-1115.34 1115.34 0 615.98 499.36 1115.34 1115.34 1115.34Z"/>
    <path stroke="#4A3AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M2138 3083.43c522.14 0 945.43-423.28 945.43-945.43s-423.29-945.43-945.43-945.43c-522.15 0-945.43 423.28-945.43 945.43s423.28 945.43 945.43 945.43Z"/>
    <path stroke="#4A3AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M2138 2913.45c428.27 0 775.45-347.18 775.45-775.45 0-428.27-347.18-775.45-775.45-775.45-428.27 0-775.45 347.18-775.45 775.45 0 428.27 347.18 775.45 775.45 775.45Z"/>
    <path stroke="#4A3AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M2138 2743.54c334.43 0 605.54-271.11 605.54-605.54 0-334.43-271.11-605.54-605.54-605.54-334.43 0-605.54 271.11-605.54 605.54 0 334.43 271.11 605.54 605.54 605.54Z"/>
    <path stroke="#4A3AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M2138 2573.57c240.56 0 435.57-195.01 435.57-435.57s-195.01-435.57-435.57-435.57-435.57 195.01-435.57 435.57 195.01 435.57 435.57 435.57Z"/>
    <path stroke="#4A3AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M2138 2403.65c146.72 0 265.65-118.93 265.65-265.65 0-146.72-118.93-265.65-265.65-265.65-146.72 0-265.65 118.93-265.65 265.65 0 146.72 118.93 265.65 265.65 265.65Z"/>
  </svg>
</div>

<style>
  .circle-lines-background {
    position: fixed;
    top: 0;
    z-index: -50;
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }

  .circle-lines-background svg path {
    opacity: 0.8;
  }
</style>