<script>
  import { onMount } from 'svelte';

  let nbDrop = 100;
  let drops = [];

  function randRange(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  }

  function createRain() {
    drops = Array.from({ length: nbDrop }, (_, i) => ({
      id: i + 1,
      left: randRange(0, window.innerWidth),
      top: randRange(-1000, 1400),
    }));
  }

  onMount(() => {
    const body = document.body;
    body.style.backgroundColor = '#111111';
    body.style.margin = 0;

    createRain();
  });
</script>

<div class="rain-bckg">
  <div class="rain">
    {#each drops as drop (drop.id)}
      <div
        class="drop"
        style="left: {drop.left}px; top: {drop.top}px;"
      ></div>
    {/each}
  </div>
</div>

<style>
  .rain-bckg {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -50;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
  }

  .rain {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .drop {
    background: linear-gradient(
      to bottom,
      rgba(13, 52, 58, 1) 0%,
      rgba(255, 255, 255, 0.6) 100%
    );
    width: 1px;
    height: 89px;
    position: absolute;
    animation: fall 1.4s linear infinite;
  }

  @keyframes fall {
    to {
      margin-top: 900px;
    }
  }
</style>
