<script>
  import { onMount, onDestroy } from 'svelte'

  const bckgColor = '#111111'
  const NUM_STARS = 2000

  onMount(() => {
    const body = document.body
    body.style.backgroundColor = 'transparent'

    const stars = document.getElementById('stars')
    if (!stars) return

    stars.querySelectorAll('div').forEach((star, index) => {
      const size = Math.random() > 0.5 ? 1.2 : 2.2
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      star.style.opacity = `${Math.random()}`
      star.style.top = `${Math.random() * 100}vh`
      star.style.left = `${Math.random() * 100}vw`
      star.id = `star-${index+1}`
    })

    const starInterval = setInterval(() => {
      const randomStar = document.getElementById(`star-${Math.floor(Math.random() * NUM_STARS) + 1}`)
      if (!randomStar) return

      randomStar.style.opacity = 0
      setTimeout(() => {
        randomStar.style.opacity = 1
      }, 1000)
    }, 2000)
  })

  onDestroy(() => {
    clearInterval(starInterval)
  })
</script>

<div
  id="stars"
  class="magic-stars-bckg inset-0 -z-10 pointer-events-none m-auto size-full"
  style="--bckgColor: {bckgColor};"
>
  {#each Array.from({ length: NUM_STARS }, (_, i) => i) as i}
    <div class="absolute bg-white rounded-full"></div>
  {/each}
</div>

<style>
  .magic-stars-bckg {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -50;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    background-color: var(--bckgColor);
  }
</style>
