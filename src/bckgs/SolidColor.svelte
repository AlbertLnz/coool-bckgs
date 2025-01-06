<script>
  import { onMount } from 'svelte';

  const bckgColor = '#1E1F29';

  onMount(() => {
    const body = document.body;
    body.style.backgroundColor = bckgColor;
  });
</script>

<div
  class="solid-background"
  style="--bckgColor: {bckgColor};"
></div>

<style>
  .solid-background {
    position: fixed;
    top: 0;
    z-index: -50;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: var(--bckgColor);
  }
</style>
