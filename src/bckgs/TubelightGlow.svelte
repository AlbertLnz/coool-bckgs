<script>
  import { onMount } from "svelte"

  const bckgColor = '#111111'
  const perspective = 278
  const perspective_str = `${perspective}px`
  let width = $state(0)
  let height = $state(0)
  
  onMount(() => {
    const body = document.body
    body.style.backgroundColor = 'transparent'

    width = document.body.clientWidth
    height = document.body.clientHeight
  })
</script>

<div
  class="tubelight-glow-background"
  style="--bckgColor: {bckgColor}; --perspective: {perspective}; --perspective_str: {perspective_str}; --bckgWidth: {width}; --bckgHeight: {height}"
>
  <div class="light"></div>
</div>

<style>
  .tubelight-glow-background {
    position: fixed;
    top: 0;
    z-index: -50;
    overflow: hidden;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    /* background-color: var(--bckgColor); */
    animation: color 10s linear infinite;
  }

  @keyframes color {
    0% {
      filter: hue-rotate(0deg);
    }

    100% {
      filter: hue-rotate(360deg);
    }
  }

  .light {
    width: calc(var(--bckgWidth) - var(--perspective));
    perspective: var(--perspective_str);
    position: relative;
    margin: auto;
  }

  .light::before {
    content: '';
    position: absolute;
    height: 814px;
    width: 1430px;
    top: 0;
    left: 50%;
    transform: rotateX(30deg) translateX(-50%) translateY(0%);
    filter: blur(140px);
    background: linear-gradient(
      to bottom,
      rgb(0, 0, 255) 0%,
      rgba(0, 85, 197, 0.534) 40%,
      var(--bckgColor) 40%,
      var(--bckgColor) 100%
    )
  }
</style>