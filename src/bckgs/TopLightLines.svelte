<script>
  import { onMount } from "svelte"

  const bckgColor = '#111111'

  let lineCount = 100
  let lineSpacing = 0
  let width = $state(0)
  let height = $state(0)
  let randomY2 = $state([])
  let adjustedX2 = $state([])

  onMount(() => {
    const body = document.body
    body.style.backgroundColor = 'transparent'

    width = document.body.clientWidth
    height = document.body.clientHeight

    randomY2 = Array.from({ length: lineCount }, () => Math.random() * height)

    adjustedX2 = randomY2.map((y2, index) => {
      const x1 = (width * 1.5) / lineCount * (index + 1) + (index * lineSpacing)
      const y1 = 0
      const originalX2 = x1 - width / lineCount / 0.1 + (index * lineSpacing)
      const originalY2 = height

      return x1 + (originalX2 - x1) * (y2 - y1) / (originalY2 - y1)
    })
  })
</script>

<svg class="top-light-lines-background" style="--bckgColor: {bckgColor};" width={width} height={height}>
  {#each Array(lineCount) as _, index}
    <line
      id="line-{index}"
      x1={(width * 1.5) / lineCount * (index + 1) + (index * lineSpacing)}
      y1={0}
      x2={adjustedX2[index]}
      y2={randomY2[index]}
      stroke="#A6CDC6"
      stroke-width="12"
      opacity="0.4"
      stroke-linecap="round"
    />
  {/each}
  {#each Array(lineCount) as _, index}
    <line
      class="line-blur"
      x1={(width * 1.5) / lineCount * (index + 1) + (index * lineSpacing)}
      y1={0}
      x2={adjustedX2[index]}
      y2={randomY2[index]}
      stroke="#A6CDC6"
      stroke-width="12"
      opacity="0.4"
      stroke-linecap="round"
    />
  {/each}
</svg>

<style>
  .top-light-lines-background {
    position: fixed;
    top: 0;
    z-index: -50;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: var(--bckgColor);
  }

  .line-blur {
    filter: blur(8px);
    fill: yellow;
    z-index: -100;
  }
</style>
