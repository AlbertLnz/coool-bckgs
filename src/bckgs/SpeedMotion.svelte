<script>
  import { onMount } from "svelte"

  const bckgColor = '#111111'

  let lines = [];
  const numLines = 180

  for (let i = 0; i < numLines; i++) {
    const angle = Math.random() * 360;
    const length = Math.random() * 1050 + 50;
    const offsetX = Math.random() * 100 + 200;
    const offsetY = Math.random() * 100 + 100;
    lines.push({ angle, length, offsetX, offsetY })
  }

  onMount(() => {
    const body = document.body;
    body.style.backgroundColor = 'transparent'
  });
</script>

<svg class="speed-motion-background" style="--bckgColor: {bckgColor};" viewBox="-400 -400 800 800" fill="none">
  {#each lines as { angle, length, offsetX, offsetY }, index}
    <line
      id="line-{index}"
      class="animated-line"
      x1={Math.cos((angle * Math.PI) / 180) * offsetX}
      y1={Math.sin((angle * Math.PI) / 180) * offsetY}
      x2={Math.cos((angle * Math.PI) / 180) * (offsetX + length)}
      y2={Math.sin((angle * Math.PI) / 180) * (offsetY + length)}
      stroke="white"
      stroke-width="2"
      stroke-opacity="0.2"
    />
  {/each}
</svg>

<style>
  .speed-motion-background {
    position: fixed;
    top: 0;
    z-index: -50;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: var(--bckgColor);
    aspect-ratio: 1/1;
  }

  /* #line-0 {
    stroke: white;
    stroke-width: 2;
    stroke-opacity: 0.8;
    animation: strokeOpacityAnimation 1s ease-in-out alternate infinite;
  }

  @keyframes strokeOpacityAnimation {
    0% {
      stroke-opacity: 0.2;
    }
    50% {
      stroke-opacity: 0.6;
    }
    100% {
      stroke-opacity: 1;
    }
  } */

  .animated-line {
    animation: strokeOpacityAnimation 8s ease-in-out alternate infinite;
  }

  @keyframes strokeOpacityAnimation {
    0% {
      stroke-opacity: 0.2;
      stroke-dasharray: 0, 1000; 
    }
    50% {
      stroke-opacity: 0.8;
      stroke-dasharray: 500, 1000;
    }
    100% {
      stroke-opacity: 1;
      stroke-dasharray: 1000, 0;
    }
  }

</style>
