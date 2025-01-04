<script>
  const bckgColor = '#1F1F1F';
  const bckgOpacity = 0.9;
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
    height: 100vh;
    background-color: var(--bckgColor);
    opacity: var(--bckgOpacity);
  }
</style>
