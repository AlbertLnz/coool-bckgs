<script>
  import { onMount } from 'svelte'

  const bckgColor = '#111111'

  onMount(() => {
    const body = document.body
    body.style.backgroundColor = 'transparent'

    const canvas = document.getElementById('canv')
    const ctx = canvas.getContext('2d')

    const w = canvas.width = document.body.offsetWidth
    const h = canvas.height = document.body.offsetHeight
    const cols = Math.floor(w / 20) + 1
    const ypos = Array(cols).fill(0)

    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, w, h)

    function matrix () {
      ctx.fillStyle = '#0001'
      ctx.fillRect(0, 0, w, h)
      
      ctx.fillStyle = '#949227' // #0f0
      ctx.font = '15pt monospace'
      
      ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128)
        const x = ind * 20
        ctx.fillText(text, x, y)
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0
        else ypos[ind] = y + 20
      })
    }

    setInterval(matrix, 50)
  })
</script>

<div class="matrix-effect-background" style="--bckgColor: {bckgColor}">
  <canvas id="canv" width=500 height=200></canvas>
</div>

<style>
  .matrix-effect-background {
    position: fixed;
    top: 0;
    z-index: -50;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: var(--bckgColor);
    aspect-ratio: 1/1;
  }
</style>
