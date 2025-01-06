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
      left: randRange(0, 1600),
      top: randRange(-1000, 1400),
    }));
  }

  onMount(() => {
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
    position: absolute;
    top: 0;
    z-index: -50;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: black;
  }

  .rain {
    position: relative;
    width: 100%;
    height: 100vh;
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
    -webkit-animation: fall 1.4s linear infinite;
    -moz-animation: fall 1.4s linear infinite;
    animation: fall 1.4s linear infinite;
  }

  /* Animate the drops */
  @keyframes fall {
    to {
      margin-top: 900px;
    }
  }
</style>
