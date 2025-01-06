<script>
  import { onMount } from 'svelte';
  let snowflakes = [];

  function createSnowflake() {
    const snowflake = {
      id: Math.random().toString(36),
      left: Math.random() * innerWidth,
      top: -5,
      opacity: Math.random(),
      scale: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 2 + 1,
      wobble: 0,
    };

    snowflakes = [...snowflakes, snowflake];
  }

  function updateSnowflakes() {
    snowflakes = snowflakes.map(snowflake => {
      const newTop = snowflake.top + snowflake.speed;
      const newLeft =
        snowflake.left + Math.sin(snowflake.wobble) * 2;
      snowflake.wobble += 0.02;

      return {
        ...snowflake,
        top: newTop,
        left: newLeft,
      };
    }).filter(snowflake => snowflake.top < innerHeight);
  }

  onMount(() => {
    const snowflakeInterval = setInterval(createSnowflake, 50);
    const updateInterval = setInterval(updateSnowflakes, 16);

    return () => {
      clearInterval(snowflakeInterval);
      clearInterval(updateInterval);
    };
  });
</script>

<div class="snowflakes-bckg">
  {#each snowflakes as snowflake (snowflake.id)}
    <div
      class="snowflake"
      style="left: {snowflake.left}px; top: {snowflake.top}px; opacity: {snowflake.opacity}; transform: scale({snowflake.scale});"
    ></div>
  {/each}
</div>

<style>

  .snowflakes-bckg {
    position: absolute;
    top: 0;
    z-index: -50;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: black;
  }

  .snowflake {
    position: absolute;
    pointer-events: none;
    width: 4px;
    height: 4px;
    background-color: white;
    border-radius: 50%;
  }
</style>
