<script>
  import { onMount } from 'svelte'

  const bckgColor = '#111111'

  onMount(() => {
    const body = document.body
    body.style.backgroundColor = 'transparent'
  })
</script>

<div
  id="glass-effect-bckg"
  style="--bckgColor: {bckgColor};"
>
  <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1024" fill="none">
    <g clip-path="url(#a)">
      <path fill="#000" d="M0 0h1440v1024H0z"/>
      <g filter="url(#b)">
        <ellipse cx="252.5" cy="776" fill="#3E74FF" rx="381.5" ry="400"/>
      </g>
      <g filter="url(#c)">
        <ellipse cx="706.5" cy="945" fill="#933EFF" rx="381.5" ry="400"/>
      </g>
      <g filter="url(#d)">
        <circle cx="1298" cy="914" r="225" fill="#933EFF"/>
      </g>
      <path fill="url(#f)" fill-opacity=".3" d="M-15 0H90v1024H-15z" data-figma-bg-blur-radius="65" style="mix-blend-mode:overlay"/>
      <path fill="url(#h)" fill-opacity=".3" d="M90 0h105v1024H90z" data-figma-bg-blur-radius="65" style="mix-blend-mode:overlay"/>
      <path fill="url(#j)" fill-opacity=".3" d="M195 0h105v1024H195z" data-figma-bg-blur-radius="65" style="mix-blend-mode:overlay"/>
      <path fill="url(#l)" fill-opacity=".3" d="M300 0h105v1024H300z" data-figma-bg-blur-radius="65" style="mix-blend-mode:overlay"/>
      <path fill="url(#n)" fill-opacity=".3" d="M405 0h105v1024H405z" data-figma-bg-blur-radius="65" style="mix-blend-mode:overlay"/>
      <path fill="url(#p)" fill-opacity=".3" d="M510 0h105v1024H510z" data-figma-bg-blur-radius="65" style="mix-blend-mode:overlay"/>
      <path fill="url(#r)" fill-opacity=".3" d="M615 0h105v1024H615z" data-figma-bg-blur-radius="65" style="mix-blend-mode:overlay"/>
      <path fill="url(#t)" fill-opacity=".3" d="M720 0h105v1024H720z" data-figma-bg-blur-radius="65" style="mix-blend-mode:overlay"/>
      <path fill="url(#v)" fill-opacity=".3" d="M825 0h105v1024H825z" data-figma-bg-blur-radius="65" style="mix-blend-mode:overlay"/>
      <path fill="url(#x)" fill-opacity=".3" d="M930 0h105v1024H930z" data-figma-bg-blur-radius="65" style="mix-blend-mode:overlay"/>
      <path fill="url(#z)" fill-opacity=".3" d="M1035 0h105v1024h-105z" data-figma-bg-blur-radius="65" style="mix-blend-mode:overlay"/>
      <path fill="url(#B)" fill-opacity=".3" d="M1140 0h105v1024h-105z" data-figma-bg-blur-radius="65" style="mix-blend-mode:overlay"/>
      <path fill="url(#D)" fill-opacity=".3" d="M1245 0h105v1024h-105z" data-figma-bg-blur-radius="65" style="mix-blend-mode:overlay"/>
      <path fill="url(#F)" fill-opacity=".3" d="M1350 0h105v1024h-105z" data-figma-bg-blur-radius="65" style="mix-blend-mode:overlay"/>
    </g>
    <defs>
      <clipPath id="e">
        <path d="M65 65h105v1024H65z"/>
      </clipPath>
      <clipPath id="g">
        <path d="M65 65h105v1024H65z"/>
      </clipPath>
      <clipPath id="i">
        <path d="M65 65h105v1024H65z"/>
      </clipPath>
      <clipPath id="k">
        <path d="M65 65h105v1024H65z"/>
      </clipPath>
      <clipPath id="m">
        <path d="M65 65h105v1024H65z"/>
      </clipPath>
      <clipPath id="o">
        <path d="M65 65h105v1024H65z"/>
      </clipPath>
      <clipPath id="q">
        <path d="M65 65h105v1024H65z"/>
      </clipPath>
      <clipPath id="s">
        <path d="M65 65h105v1024H65z"/>
      </clipPath>
      <clipPath id="u">
        <path d="M65 65h105v1024H65z"/>
      </clipPath>
      <clipPath id="w">
        <path d="M65 65h105v1024H65z"/>
      </clipPath>
      <clipPath id="y">
        <path d="M65 65h105v1024H65z"/>
      </clipPath>
      <clipPath id="A">
        <path d="M65 65h105v1024H65z"/>
      </clipPath>
      <clipPath id="C">
        <path d="M65 65h105v1024H65z"/>
      </clipPath>
      <clipPath id="E">
        <path d="M65 65h105v1024H65z"/>
      </clipPath>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h1440v1024H0z"/>
      </clipPath>
      <linearGradient id="f" x1="-15" x2="90" y1="512" y2="512" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fff" stop-opacity="0"/>
        <stop offset=".8"/>
        <stop offset="1" stop-color="#fff"/>
      </linearGradient>
      <linearGradient id="h" x1="90" x2="195" y1="512" y2="512" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fff" stop-opacity="0"/>
        <stop offset=".8"/>
        <stop offset="1" stop-color="#fff"/>
      </linearGradient>
      <linearGradient id="j" x1="195" x2="300" y1="512" y2="512" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fff" stop-opacity="0"/>
        <stop offset=".8"/>
        <stop offset="1" stop-color="#fff"/>
      </linearGradient>
      <linearGradient id="l" x1="300" x2="405" y1="512" y2="512" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fff" stop-opacity="0"/>
        <stop offset=".8"/>
        <stop offset="1" stop-color="#fff"/>
      </linearGradient>
      <linearGradient id="n" x1="405" x2="510" y1="512" y2="512" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fff" stop-opacity="0"/>
        <stop offset=".8"/>
        <stop offset="1" stop-color="#fff"/>
      </linearGradient>
      <linearGradient id="p" x1="510" x2="615" y1="512" y2="512" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fff" stop-opacity="0"/>
        <stop offset=".8"/>
        <stop offset="1" stop-color="#fff"/>
      </linearGradient>
      <linearGradient id="r" x1="615" x2="720" y1="512" y2="512" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fff" stop-opacity="0"/>
        <stop offset=".8"/>
        <stop offset="1" stop-color="#fff"/>
      </linearGradient>
      <linearGradient id="t" x1="720" x2="825" y1="512" y2="512" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fff" stop-opacity="0"/>
        <stop offset=".8"/>
        <stop offset="1" stop-color="#fff"/>
      </linearGradient>
      <linearGradient id="v" x1="825" x2="930" y1="512" y2="512" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fff" stop-opacity="0"/>
        <stop offset=".8"/>
        <stop offset="1" stop-color="#fff"/>
      </linearGradient>
      <linearGradient id="x" x1="930" x2="1035" y1="512" y2="512" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fff" stop-opacity="0"/>
        <stop offset=".8"/>
        <stop offset="1" stop-color="#fff"/>
      </linearGradient>
      <linearGradient id="z" x1="1035" x2="1140" y1="512" y2="512" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fff" stop-opacity="0"/>
        <stop offset=".8"/>
        <stop offset="1" stop-color="#fff"/>
      </linearGradient>
      <linearGradient id="B" x1="1140" x2="1245" y1="512" y2="512" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fff" stop-opacity="0"/>
        <stop offset=".8"/>
        <stop offset="1" stop-color="#fff"/>
      </linearGradient>
      <linearGradient id="D" x1="1245" x2="1350" y1="512" y2="512" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fff" stop-opacity="0"/>
        <stop offset=".8"/>
        <stop offset="1" stop-color="#fff"/>
      </linearGradient>
      <linearGradient id="F" x1="1350" x2="1455" y1="512" y2="512" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fff" stop-opacity="0"/>
        <stop offset=".8"/>
        <stop offset="1" stop-color="#fff"/>
      </linearGradient>
      <filter id="b" width="1285" height="1322" x="-390" y="115" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur_4_4" stdDeviation="130.5"/>
      </filter>
      <filter id="c" width="1285" height="1322" x="64" y="284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur_4_4" stdDeviation="130.5"/>
      </filter>
      <filter id="d" width="972" height="972" x="812" y="428" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur_4_4" stdDeviation="130.5"/>
      </filter>
    </defs>
  </svg>
</div>

<style>
  #glass-effect-bckg {
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
