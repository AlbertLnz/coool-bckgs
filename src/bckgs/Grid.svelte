<script>
  import { onMount } from "svelte";

  const bckgColor = '#111111';
  const linesColor = '#454125';
  const linesDepth = 1;
  const linesDepthTxt = `${linesDepth}px`;
  const columns = 40;
  const rows = Math.floor(columns / 2);

  onMount(() => {
    const body = document.body;
    body.style.backgroundColor = 'transparent';
  });
</script>

<div
  class="grid-background"
  style="--bckgColor: {bckgColor}; --linesColor: {linesColor}; --linesDepth: {linesDepthTxt}; --columns: {columns}; --rows: {rows};"
></div>

<style>
  .grid-background {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -50;
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    grid-template-rows: repeat(var(--rows), 1fr);
    background-color: var(--bckgColor);
  }

  .grid-background::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
        0deg,
        var(--linesColor),
        var(--linesColor) var(--linesDepth),
        transparent var(--linesDepth),
        transparent calc(100% / var(--rows))
      ),
      repeating-linear-gradient(
        90deg,
        var(--linesColor),
        var(--linesColor) var(--linesDepth),
        transparent var(--linesDepth),
        transparent calc(100% / var(--columns))
      );
    z-index: 1;
  }
</style>
