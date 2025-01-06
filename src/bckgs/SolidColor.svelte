<script>
  import { onMount } from 'svelte';

  const bckgColor = '#111111';
  const bckgOpacity = 0.9;

  onMount(() => {
    const body = document.body;
    body.style.backgroundColor = bckgColor;
    body.style.opacity = bckgOpacity;
    body.style.margin = 0;
  });
</script>

<div
  class="solid-background"
  style="--bckgColor: {bckgColor}; --bckgOpacity: {bckgOpacity};"
></div>

<style>
  .solid-background {
    position: absolute;
    top: 0;
    z-index: -50;
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }
</style>
