<script>
  import { onMount } from "svelte"

  const loop = false
  let paths = []
  let activeIndex = -1

  onMount(() => {
    const body = document.body;
    body.style.backgroundColor = 'transparent';

    paths = document.querySelectorAll(".infinite-square-3d svg path")

    startAnimation()
  })

  function startAnimation() {
    if (!paths.length) return

    const paintPaths = () => {
      paths.forEach((path, index) => {
        path.style.fill = 'transparent'
      })

      activeIndex = (activeIndex + 1) % paths.length

      const activePath = paths[activeIndex]
      activePath.style.fill = '#4A3AFF'
    }
    
    // if (loop) {
    //   setInterval(paintPaths, 2000)
    // } else {
    //   paintPaths()
    // }

    setInterval(paintPaths, 100)
  }
</script>

<div class="infinite-square-3d">
  <svg viewBox="0 0 1754 936" fill="none">
    <g clip-path="url(#clip0_1970_250)">
      
      <path d="M876.784 1540.13L333.869 997.349L830.028 746.218L1380.35 1036.73L876.784 1540.13Z" fill="transparent" id={1} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M334.559 998.385L62.5341 726.359L505.9 575.226L830.924 746.841L334.559 998.385Z" fill="transparent" id={2} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1380.35 1036.72L830.028 746.217L1143.57 587.532L1649.14 768.009L1380.35 1036.72Z" fill="transparent" id={3} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M62.706 726.289L-100.53 563.121L291.629 462.021L506.038 575.19L62.706 726.289Z" fill="transparent" id={4} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M830.924 746.84L505.9 575.225L814.373 470.09L1144.47 587.948L830.924 746.84Z" fill="transparent" id={5} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1648.83 768.597L1143.05 587.913L1359.25 478.468L1816.13 601.326L1648.83 768.597Z" fill="transparent" id={6} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M-100.325 563.466L-209.252 454.573L139.842 381.955L291.976 462.297L-100.325 563.466Z" fill="transparent" id={7} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M506.038 575.19L291.629 462.021L582.137 387.126L814.441 470.055L506.038 575.19Z" fill="transparent" id={8} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1143.95 588.293L813.788 470.331L1040.95 392.885L1360.15 478.744L1143.95 588.293Z" fill="transparent" id={9} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1816.13 601.325L1359.25 478.467L1517.28 398.469L1930.2 487.225L1816.13 601.325Z" fill="transparent" id={10} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M-209.218 454.434L-286.974 376.678L26.3284 321.99L139.771 381.85L-209.218 454.434Z" fill="transparent" id={11} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M291.976 462.296L139.842 381.953L410.109 325.748L582.551 387.332L291.976 462.296Z" fill="transparent" id={12} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M813.889 470.296L581.588 387.299L805.581 329.577L1041.02 392.885L813.889 470.296Z" fill="transparent" id={13} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1360.15 478.744L1040.95 392.884L1215.09 333.542L1518.11 398.677L1360.15 478.744Z" fill="transparent" id={14} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1929.82 487.433L1516.83 398.608L1637.45 337.576L2012.65 404.608L1929.82 487.433Z" fill="transparent" id={15} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M-286.94 376.885L-345.283 318.542L-61.4283 275.715L26.5001 322.128L-286.94 376.885Z" fill="transparent" id={16} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M139.771 381.852L26.3284 321.992L277.011 278.2L410.005 325.681L139.771 381.852Z" fill="transparent" id={17} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M581.999 387.506L409.557 325.887L625.067 281.061L806.029 329.715L581.999 387.506Z" fill="transparent" id={18} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1041.02 392.885L805.581 329.577L983.438 283.716L1215.12 333.508L1041.02 392.885Z" fill="transparent" id={19} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1517.66 398.815L1214.6 333.644L1352.43 286.68L1638.21 337.748L1517.66 398.815Z" fill="transparent" id={20} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M2012.65 404.61L1637.45 337.578L1732.45 289.476L2075.51 341.784L2012.65 404.61Z" fill="transparent" id={21} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M26.5001 322.129L-61.4282 275.716L171.461 240.545L277.216 278.302L26.5001 322.129Z" fill="transparent" id={22} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M409.456 325.817L276.459 278.302L481.659 242.475L624.929 280.991L409.456 325.817Z" fill="transparent" id={23} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M806.029 329.714L625.067 281.06L800.89 244.51L983.886 283.819L806.029 329.714Z" fill="transparent" id={24} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1214.67 333.645L982.987 283.784L1127.71 246.475L1352.49 286.646L1214.67 333.645Z" fill="transparent" id={25} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1638.21 337.749L1352.43 286.681L1464.18 248.579L1733.17 289.612L1638.21 337.749Z" fill="transparent" id={26} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M2075.51 341.954L1732.34 289.611L1809.17 250.716L2124.82 292.611L2075.51 341.954Z" fill="transparent" id={27} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M-61.3575 275.681L-131.459 238.682L85.4625 209.821L171.532 240.545L-61.3575 275.681Z" fill="transparent" id={28} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M276.701 278.44L170.98 240.648L365.593 211.27L481.935 242.579L276.701 278.44Z" fill="transparent" id={29} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M624.929 280.991L481.659 242.474L652.653 212.613L800.752 244.44L624.929 280.991Z" fill="transparent" id={30} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M983.438 283.922L800.443 244.578L946.68 214.166L1128.19 246.578L983.438 283.922Z" fill="transparent" id={31} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1352.49 286.647L1127.71 246.476L1247.74 215.545L1464.22 248.579L1352.49 286.647Z" fill="transparent" id={32} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1733.07 289.714L1464.01 248.681L1556.45 217.165L1809.86 250.819L1733.07 289.714Z" fill="transparent" id={33} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M-131.392 238.787L-188.63 208.546L14.1216 184.375L85.5668 209.891L-131.392 238.787Z" fill="transparent" id={34} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M171.047 240.65L84.981 209.892L269.32 185.375L365.626 211.271L171.047 240.65Z" fill="transparent" id={35} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M481.935 242.579L365.593 211.27L530.553 186.374L652.929 212.684L481.935 242.579Z" fill="transparent" id={36} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M800.305 244.508L652.239 212.682L796.961 187.372L946.508 214.095L800.305 244.508Z" fill="transparent" id={37} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1128.19 246.579L946.68 214.166L1070.12 188.478L1248.19 215.649L1128.19 246.579Z" fill="transparent" id={38} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1464.04 248.648L1247.53 215.615L1348.7 189.546L1556.49 217.132L1464.04 248.648Z" fill="transparent" id={39} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1809.86 250.82L1556.45 217.166L1634.21 190.649L1873.2 218.718L1809.86 250.82Z" fill="transparent" id={40} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M-188.596 208.51L-236.181 183.407L-46.0833 162.856L14.1553 184.373L-188.596 208.51Z" fill="transparent" id={41} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M85.1191 209.96L13.674 184.443L188.392 163.616L269.492 185.443L85.1191 209.96Z" fill="transparent" id={42} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M365.626 211.271L269.32 185.375L427.831 164.272L530.623 186.375L365.626 211.271Z" fill="transparent" id={43} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M652.515 212.752L530.142 186.443L671.86 165.064L797.271 187.443L652.515 212.752Z" fill="transparent" id={44} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M946.508 214.096L796.961 187.373L921.024 165.718L1069.95 188.442L946.508 214.096Z" fill="transparent" id={45} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1247.98 215.716L1069.88 188.545L1175.57 166.545L1349.15 189.614L1247.98 215.716Z" fill="transparent" id={46} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1556.49 217.131L1348.7 189.546L1435.11 167.271L1634.24 190.649L1556.49 217.131Z" fill="transparent" id={47} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1873.13 218.681L1634.18 190.613L1700.45 168.028L1926.27 191.751L1873.13 218.681Z" fill="transparent" id={48} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M13.7076 184.442L-46.531 162.926L119.22 144.995L188.392 163.615L13.7076 184.442Z" fill="transparent" id={49} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M269.492 185.442L188.392 163.615L340.455 145.512L428.007 164.339L269.492 185.442Z" fill="transparent" id={50} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M530.209 186.407L427.421 164.304L565.243 145.995L671.894 165.028L530.209 186.407Z" fill="transparent" id={51} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M797.271 187.443L671.86 165.064L794.823 146.479L921.334 165.788L797.271 187.443Z" fill="transparent" id={52} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1069.71 188.512L920.782 165.788L1028.33 146.996L1175.4 166.547L1069.71 188.512Z" fill="transparent" id={53} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1349.15 189.615L1175.57 166.546L1267.01 147.547L1435.53 167.339L1349.15 189.615Z" fill="transparent" id={54} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1634.21 190.617L1435.11 167.238L1509.77 147.997L1700.48 168.031L1634.21 190.617Z" fill="transparent" id={55} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1926.27 191.753L1700.45 168.03L1757.62 148.548L1971.51 168.823L1926.27 191.753Z" fill="transparent" id={56} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M-46.4302 162.963L-97.9103 144.584L59.6011 128.998L119.324 145.067L-46.4302 162.963Z" fill="transparent" id={57} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M188.392 163.618L119.22 144.998L264.942 129.274L340.422 145.48L188.392 163.618Z" fill="transparent" id={58} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M427.626 164.373L340.041 145.546L473.624 129.616L565.448 146.029L427.626 164.373Z" fill="transparent" id={59} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M671.894 165.029L565.243 145.995L686.134 129.892L794.856 146.478L671.894 165.029Z" fill="transparent" id={60} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M921.095 165.823L794.58 146.547L902.369 130.272L1028.64 147.03L921.095 165.823Z" fill="transparent" id={61} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1175.4 166.547L1028.33 146.996L1122.43 130.548L1266.84 147.513L1175.4 166.547Z" fill="transparent" id={62} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1435.53 167.306L1267.01 147.513L1346.91 130.893L1510.18 148.065L1435.53 167.306Z" fill="transparent" id={63} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1700.48 168.028L1509.77 147.994L1574.9 131.201L1757.65 148.545L1700.48 168.028Z" fill="transparent" id={64} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M-97.8395 144.582L-142.322 128.686L7.56876 114.997L59.6382 128.996L-97.8395 144.582Z" fill="transparent" id={65} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M119.325 145.065L59.6012 128.996L199.323 115.169L265.081 129.306L119.325 145.065Z" fill="transparent" id={66} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M340.041 145.514L264.562 129.308L393.73 115.343L473.59 129.618L340.041 145.514Z" fill="transparent" id={67} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M565.449 146.031L473.624 129.617L591.862 115.549L686.343 129.928L565.449 146.031Z" fill="transparent" id={68} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M794.614 146.546L685.895 129.926L792.822 115.72L902.369 130.271L794.614 146.546Z" fill="transparent" id={69} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1028.64 147.028L902.369 130.27L997.541 115.891L1122.74 130.614L1028.64 147.028Z" fill="transparent" id={70} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1266.84 147.512L1122.43 130.547L1205.46 116.064L1346.74 130.892L1266.84 147.512Z" fill="transparent" id={71} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1510.18 148.066L1346.91 130.894L1417.32 116.273L1575.31 131.239L1510.18 148.066Z" fill="transparent" id={72} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1757.59 148.582L1574.8 131.238L1632.18 116.445L1807.41 131.617L1757.59 148.582Z" fill="transparent" id={73} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M-142.289 128.721L-181.114 114.86L-38.1868 102.688L7.63948 115.032L-142.289 128.721Z" fill="transparent" id={74} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M59.6383 128.995L7.56885 114.995L141.566 102.754L199.356 115.168L59.6383 128.995Z" fill="transparent" id={75} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M264.7 129.342L198.942 115.204L323.767 102.86L393.868 115.377L264.7 129.342Z" fill="transparent" id={76} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M473.59 129.615L393.73 115.34L509.001 102.892L591.828 115.512L473.59 129.615Z" fill="transparent" id={77} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M686.101 129.995L591.62 115.582L697.031 102.996L793.028 115.754L686.101 129.995Z" fill="transparent" id={78} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M902.369 130.271L792.823 115.72L888.061 103.031L997.574 115.892L902.369 130.271Z" fill="transparent" id={79} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1122.74 130.583L997.574 115.894L1082.26 103.101L1205.74 116.101L1122.74 130.583Z" fill="transparent" id={80} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1346.74 130.893L1205.46 116.066L1279.26 103.17L1417.15 116.239L1346.74 130.893Z" fill="transparent" id={81} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1575.21 131.306L1417.18 116.306L1479.73 103.307L1632.59 116.513L1575.21 131.306Z" fill="transparent" id={82} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1807.41 131.617L1632.18 116.445L1683.07 103.342L1851.24 116.652L1807.41 131.617Z" fill="transparent" id={83} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M7.63952 115.03L-38.1868 102.686L90.4629 91.7549L141.67 102.789L7.63952 115.03Z" fill="transparent" id={84} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M199.013 115.202L141.222 102.755L261.733 91.7549L323.8 102.823L199.013 115.202Z" fill="transparent" id={85} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M393.868 115.375L323.767 102.858L435.903 91.7549L509.14 102.927L393.868 115.375Z" fill="transparent" id={86} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M591.586 115.548L508.725 102.928L612.241 91.7212L696.997 102.997L591.586 115.548Z" fill="transparent" id={87} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M793.028 115.755L697.031 102.997L791.613 91.7212L888.267 103.066L793.028 115.755Z" fill="transparent" id={88} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M997.574 115.892L888.061 103.031L973.403 91.686L1082.26 103.099L997.574 115.892Z" fill="transparent" id={89} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1205.74 116.099L1082.26 103.099L1158.09 91.686L1279.53 103.203L1205.74 116.099Z" fill="transparent" id={90} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1417.05 116.274L1279.12 103.206L1345.15 91.6543L1479.56 103.275L1417.05 116.274Z" fill="transparent" id={91} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1632.59 116.516L1479.73 103.309L1535.63 91.6543L1683.45 103.378L1632.59 116.516Z" fill="transparent" id={92} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1851.1 116.688L1682.9 103.378L1728.38 91.6543L1889.93 103.447L1851.1 116.688Z" fill="transparent" id={93} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M-38.1869 102.686L-78.8073 91.7555L44.8117 81.9282L90.4292 91.7555L-38.1869 102.686Z" fill="transparent" id={94} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M141.323 102.789L90.1531 91.7893L206.563 81.8931L261.871 91.7893L141.323 102.789Z" fill="transparent" id={95} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M323.8 102.825L261.733 91.7567L370.698 81.7915L435.937 91.7567L323.8 102.825Z" fill="transparent" id={96} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M508.901 102.963L435.661 91.7905L536.967 81.7563L612.413 91.756L508.901 102.963Z" fill="transparent" id={97} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M696.997 102.997L612.241 91.721L705.651 81.6523L791.58 91.721L696.997 102.997Z" fill="transparent" id={98} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M888.3 103.065L791.65 91.721L876.922 81.5488L973.642 91.721L888.3 103.065Z" fill="transparent" id={99} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1082.26 103.101L973.403 91.6878L1050.33 81.4468L1158.09 91.6878L1082.26 103.101Z" fill="transparent" id={100} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1279.43 103.238L1157.95 91.6865L1226.26 81.3765L1345.46 91.6865L1279.43 103.238Z" fill="transparent" id={101} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1479.56 103.272L1345.15 91.652L1404.6 81.2729L1535.49 91.652L1479.56 103.272Z" fill="transparent" id={102} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1683.28 103.412L1535.46 91.6882L1585.73 81.2402L1728.72 91.6882L1683.28 103.412Z" fill="transparent" id={103} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1889.93 103.446L1728.38 91.653L1769.21 81.1016L1924.61 91.6184L1889.93 103.446Z" fill="transparent" id={104} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M-78.7365 91.792L-115.013 82.0336L3.88155 73.1719L44.8791 81.9647L-78.7365 91.792Z" fill="transparent" id={105} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M90.1194 91.7903L44.4985 81.963L156.945 73.0322L206.529 81.8941L90.1194 91.7903Z" fill="transparent" id={106} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M261.871 91.792L206.563 81.8957L312.388 72.896L370.836 81.8267L261.871 91.792Z" fill="transparent" id={107} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M435.694 91.7567L370.455 81.826L469.486 72.7573L537.001 81.7571L435.694 91.7567Z" fill="transparent" id={108} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M612.413 91.7547L536.967 81.7551L628.964 72.6519L705.86 81.6516L612.413 91.7547Z" fill="transparent" id={109} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M791.58 91.7222L705.685 81.6191L790.442 72.4814L876.888 81.5501L791.58 91.7222Z" fill="transparent" id={110} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>    
      <path d="M973.643 91.7206L876.922 81.5484L954.267 72.3418L1050.57 81.4795L973.643 91.7206Z" fill="transparent" id={111} fill-opacity="0.6" stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1157.95 91.6872L1050.19 81.4807L1119.88 72.2051L1226.29 81.3772L1157.95 91.6872Z" fill="transparent" id={112} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1345.46 91.686L1226.26 81.376L1288.12 72.0659L1404.87 81.307L1345.46 91.686Z" fill="transparent" id={113} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1535.32 91.687L1404.39 81.308L1458.18 71.8945L1585.59 81.2046L1535.32 91.687Z" fill="transparent" id={114} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1728.72 91.686L1585.73 81.238L1631.21 71.79L1769.58 81.1346L1728.72 91.686Z" fill="transparent" id={115} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M-114.942 82.0321L-147.528 73.2738L-33.0483 65.2051L3.91524 73.1703L-114.942 82.0321Z" fill="transparent" id={116} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M44.5692 81.9994L3.60535 73.1721L112.29 65.0688L157.012 73.0341L44.5692 81.9994Z" fill="transparent" id={117} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M206.529 81.8938L156.945 73.032L259.666 64.8599L312.318 72.8941L206.529 81.8938Z" fill="transparent" id={118} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M370.593 81.8601L312.146 72.9293L408.765 64.7227L469.59 72.7914L370.593 81.8601Z" fill="transparent" id={119} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M537.001 81.7555L469.485 72.7558L559.828 64.5146L629 72.6178L537.001 81.7555Z" fill="transparent" id={120} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M705.86 81.6526L629 72.6184L712.858 64.3428L790.613 72.4805L705.86 81.6526Z" fill="transparent" id={121} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M876.888 81.5499L790.442 72.4813L867.682 64.1367L954.23 72.3433L876.888 81.5499Z" fill="transparent" id={122} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1050.4 81.5141L954.129 72.3764L1024.57 63.9629L1120.12 72.2385L1050.4 81.5141Z" fill="transparent" id={123} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1226.29 81.377L1119.88 72.2048L1183.36 63.7568L1288.12 72.0669L1226.29 81.377Z" fill="transparent" id={124} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1404.7 81.3406L1287.91 72.065L1344.22 63.5825L1458.46 71.9271L1404.7 81.3406Z" fill="transparent" id={125} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1585.59 81.2035L1458.18 71.8935L1507.08 63.3765L1631.04 71.7555L1585.59 81.2035Z" fill="transparent" id={126} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1769.52 81.1705L1631.14 71.7915L1672.45 63.2056L1806.41 71.6536L1769.52 81.1705Z" fill="transparent" id={127} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M3.63899 73.1713L-33.3245 65.2405L71.774 57.7925L112.324 65.0681L3.63899 73.1713Z" fill="transparent" id={128} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M157.012 73.0332L112.29 65.068L212.048 57.5854L259.77 64.8956L157.012 73.0332Z" fill="transparent" id={129} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M312.112 72.9292L259.423 64.8949L353.662 57.3779L408.728 64.688L312.112 72.9292Z" fill="transparent" id={130} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M469.59 72.7916L408.766 64.7229L497.347 57.1714L559.966 64.5505L469.59 72.7916Z" fill="transparent" id={131} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M629.034 72.6199L559.828 64.5167L642.584 56.9307L712.895 64.3443L629.034 72.6199Z" fill="transparent" id={132} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M790.613 72.4828L712.858 64.3451L789.684 56.7246L867.887 64.1382L790.613 72.4828Z" fill="transparent" id={133} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M954.058 72.3427L867.544 64.1361L938.232 56.5156L1024.5 63.9637L954.058 72.3427Z" fill="transparent" id={134} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1120.12 72.2395L1024.57 63.9639L1088.98 56.2744L1183.57 63.7915L1120.12 72.2395Z" fill="transparent" id={135} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1287.94 72.0679L1183.16 63.7923L1241.19 56.0684L1344.22 63.5854L1287.94 72.0679Z" fill="transparent" id={136} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1458.46 71.9272L1344.22 63.5826L1395.6 55.8242L1507.35 63.3757L1458.46 71.9272Z" fill="transparent" id={137} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1630.97 71.7899L1507.01 63.3764L1551.66 55.5835L1672.28 63.204L1630.97 71.7899Z" fill="transparent" id={138} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1806.41 71.6528L1672.45 63.2048L1710.14 55.3774L1839.93 62.9979L1806.41 71.6528Z" fill="transparent" id={139} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M-33.2906 65.2378L-66.8059 58.0312L34.9488 51.2383L71.8449 57.8243L-33.2906 65.2378Z" fill="transparent" id={140} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M112.324 65.0688L71.774 57.7932L168.633 50.9658L212.082 57.5863L112.324 65.0688Z" fill="transparent" id={141} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M259.528 64.8953L211.806 57.6197L303.664 50.7578L353.766 57.4128L259.528 64.8953Z" fill="transparent" id={142} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M408.729 64.6884L353.662 57.3783L440.385 50.4819L497.313 57.1714L408.729 64.6884Z" fill="transparent" id={143} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M559.966 64.5133L497.384 57.1686L578.864 50.2378L642.756 56.9618L559.966 64.5133Z" fill="transparent" id={144} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M712.895 64.3439L642.584 56.9303L718.687 49.9995L789.684 56.7234L712.895 64.3439Z" fill="transparent" id={145} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M867.716 64.1717L789.512 56.7581L860.129 49.7583L938.437 56.5167L867.716 64.1717Z" fill="transparent" id={146} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1024.5 63.9628L938.231 56.5147L1003.19 49.4805L1088.95 56.2733L1024.5 63.9628Z" fill="transparent" id={147} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1183.39 63.7935L1088.81 56.3109L1147.98 49.2422L1241.39 56.0696L1183.39 63.7935Z" fill="transparent" id={148} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1344.22 63.5836L1241.19 56.0666L1294.39 48.9634L1395.63 55.8253L1344.22 63.5836Z" fill="transparent"  id={149} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1507.28 63.4118L1395.53 55.8603L1442.7 48.7227L1551.94 55.619L1507.28 63.4118Z" fill="transparent" id={150} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1672.28 63.2054L1551.66 55.585L1592.59 48.4473L1710 55.3436L1672.28 63.2054Z" fill="transparent" id={151} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M71.845 57.8259L34.9489 51.2398L129.016 44.9297L168.703 50.9984L71.845 57.8259Z" fill="transparent" id={152} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M211.839 57.6196L168.427 50.9991L257.942 44.689L303.697 50.7577L211.839 57.6196Z" fill="transparent" id={153} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M353.766 57.4122L303.664 50.7572L388.558 44.4126L440.523 50.5158L353.766 57.4122Z" fill="transparent" id={154} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M497.313 57.1708L440.419 50.4813L520.521 44.1367L578.793 50.2399L497.313 57.1708Z" fill="transparent" id={155} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M642.756 56.9644L578.864 50.2404L654.067 43.8613L718.858 49.9991L642.756 56.9644Z" fill="transparent" id={156} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M789.546 56.758L718.549 49.9995L788.755 43.5859L860.129 49.7581L789.546 56.758Z" fill="transparent" id={157} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M938.437 56.5161L860.129 49.7576L925.23 43.3096L1003.37 49.5163L938.437 56.5161Z" fill="transparent" id={158} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1088.78 56.3097L1003.02 49.5168L1062.88 43.0342L1147.95 49.2409L1088.78 56.3097Z" fill="transparent" id={159} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1241.39 56.0658L1147.98 49.2384L1202.5 42.7559L1294.64 48.9971L1241.39 56.0658Z" fill="transparent" id={160} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1395.53 55.8594L1294.32 48.9976L1343.36 42.4805L1442.7 48.7217L1395.53 55.8594Z" fill="transparent" id={161} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1551.94 55.6203L1442.7 48.7239L1486.08 42.1724L1592.83 48.4825L1551.94 55.6203Z" fill="transparent" id={162} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M168.495 50.9977L128.807 44.9634L216.082 39.1016L258.046 44.6876L168.495 50.9977Z" fill="transparent" id={163} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M303.697 50.7569L257.942 44.6881L340.94 38.8262L388.592 44.4122L303.697 50.7569Z" fill="transparent" id={164} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M440.523 50.5152L388.592 44.412L467.213 38.5156L520.622 44.1362L440.523 50.5152Z" fill="transparent" id={165} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M578.793 50.2394L520.521 44.1361L594.724 38.2397L654.033 43.8603L578.793 50.2394Z" fill="transparent" id={166} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M718.687 50.032L653.896 43.8942L723.549 37.9634L788.889 43.6184L718.687 50.032Z" fill="transparent" id={167} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M860.129 49.7564L788.755 43.5842L853.751 37.6533L925.23 43.3083L860.129 49.7564Z" fill="transparent" id={168} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1003.19 49.515L925.058 43.3428L985.3 37.3774L1063.06 43.0324L1003.19 49.515Z" fill="transparent" id={169} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1147.95 49.2407L1062.88 43.034L1118.26 37.0342L1202.46 42.7581L1147.95 49.2407Z" fill="transparent" id={170} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1294.53 49.0003L1202.4 42.7591L1252.81 36.7593L1343.56 42.4832L1294.53 49.0003Z" fill="transparent" id={171} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1442.7 48.7218L1343.36 42.4806L1388.63 36.4463L1486.11 42.1703L1442.7 48.7218Z" fill="transparent" id={172} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M258.046 44.6886L216.082 39.1026L297.215 33.689L341.041 38.8267L258.046 44.6886Z" fill="transparent" id={173} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M388.592 44.4126L340.974 38.8265L418.144 33.3784L467.246 38.5162L388.592 44.4126Z" fill="transparent" id={174} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M520.622 44.1365L467.213 38.516L540.311 33.0679L594.829 38.2401L520.622 44.1365Z" fill="transparent" id={175} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M653.862 43.8604L594.552 38.2399L663.482 32.7573L723.512 37.964L653.862 43.8604Z" fill="transparent" id={176} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M788.889 43.6193L723.549 37.9643L788.236 32.4473L853.889 37.654L788.889 43.6193Z" fill="transparent" id={177} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M925.058 43.3423L853.579 37.6528L913.885 32.1357L985.3 37.377L925.058 43.3423Z" fill="transparent" id={178} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1063.06 43.0327L985.3 37.3777L1041.16 31.8262L1118.43 37.0674L1063.06 43.0327Z" fill="transparent" id={179} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1202.36 42.7586L1118.16 37.0691L1169.5 31.5176L1252.74 36.7588L1202.36 42.7586Z" fill="transparent" id={180} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1343.56 42.4806L1252.81 36.7566L1299.49 31.2051L1388.87 36.4463L1343.56 42.4806Z" fill="transparent" id={181} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M341.078 38.8252L297.252 33.6875L372.903 28.6187L418.248 33.3771L341.078 38.8252Z" fill="transparent" id={182} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M467.246 38.5147L418.143 33.3769L490.037 28.3081L540.311 33.0665L467.246 38.5147Z" fill="transparent" id={183} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M594.657 38.2756L540.139 33.1033L608.241 28L663.583 32.793L594.657 38.2756Z" fill="transparent" id={184} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M723.512 37.9648L663.482 32.7581L727.65 27.6548L788.165 32.4477L723.512 37.9648Z" fill="transparent" id={185} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M853.718 37.6888L788.064 32.482L848.269 27.3442L914.06 32.1717L853.718 37.6888Z" fill="transparent" id={186} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M985.3 37.3782L913.885 32.137L970.056 27.0337L1041.2 31.8266L985.3 37.3782Z" fill="transparent" id={187} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1118.33 37.067L1041.06 31.8602L1093.06 26.688L1169.67 31.5154L1118.33 37.067Z" fill="transparent" id={188} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1252.74 36.7563L1169.5 31.515L1217.26 26.3428L1299.46 31.2047L1252.74 36.7563Z" fill="transparent" id={189} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M418.248 33.379L372.903 28.6205L443.624 23.8965L490.141 28.3102L418.248 33.379Z" fill="transparent" id={190} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M540.173 33.0679L489.898 28.3095L557.07 23.5854L608.274 27.9991L540.173 33.0679Z" fill="transparent" id={191} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M663.583 32.7916L608.241 27.9987L671.86 23.2402L727.789 27.6884L663.583 32.7916Z" fill="transparent" id={192} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M787.993 32.4809L727.479 27.688L787.441 22.895L848.198 27.3431L787.993 32.4809Z" fill="transparent" id={193} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M914.061 32.1704L848.269 27.3429L904.474 22.5845L970.194 27.0326L914.061 32.1704Z" fill="transparent" id={194} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1041.09 31.8626L969.955 27.0351L1022.33 22.2422L1093.09 26.6904L1041.09 31.8626Z" fill="transparent" id={195} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1169.67 31.5169L1093.06 26.6894L1141.57 21.8965L1217.43 26.3791L1169.67 31.5169Z" fill="transparent" id={196} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M489.969 28.3093L443.453 23.8956L509.692 19.4819L557.175 23.5853L489.969 28.3093Z" fill="transparent" id={197} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M608.274 27.9985L557.07 23.5848L620 19.1367L671.86 23.2401L608.274 27.9985Z" fill="transparent" id={198} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M727.617 27.6902L671.689 23.2421L731.203 18.7939L787.579 22.9317L727.617 27.6902Z" fill="transparent" id={199} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M848.198 27.345L787.441 22.8968L843.511 18.4487L904.403 22.5865L848.198 27.345Z" fill="transparent" id={200} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M970.093 27.034L904.369 22.5859L956.954 18.1377L1022.5 22.241L970.093 27.034Z" fill="transparent" id={201} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1093.09 26.6886L1022.33 22.2404L1071.33 17.7578L1141.57 21.8957L1093.09 26.6886Z" fill="transparent" id={202} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M557.175 23.5842L509.692 19.4809L571.863 15.3086L620.104 19.1361L557.175 23.5842Z" fill="transparent" id={203} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M671.688 23.239L619.828 19.1357L678.861 14.9634L731.237 18.7909L671.688 23.239Z" fill="transparent" id={204} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M787.579 22.9302L731.203 18.7924L787.064 14.6201L843.649 18.4476L787.579 22.9302Z" fill="transparent" id={205} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M904.302 22.585L843.407 18.4472L896.025 14.2749L956.887 18.1024L904.302 22.585Z" fill="transparent" id={206} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M1022.5 22.2403L956.954 18.1369L1006.23 13.9302L1071.47 17.7922L1022.5 22.2403Z" fill="transparent" id={207} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M619.929 19.172L571.692 15.3445L630.172 11.4136L678.962 14.9997L619.929 19.172Z" fill="transparent" id={208} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M731.237 18.7922L678.861 14.9648L734.375 11.0684L787.098 14.62L731.237 18.7922Z" fill="transparent" id={209} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M843.545 18.481L786.96 14.6536L839.44 10.7227L896.163 14.3087L843.545 18.481Z" fill="transparent" id={210} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M956.887 18.1041L896.025 14.2766L945.438 10.3457L1006.19 13.9318L956.887 18.1041Z" fill="transparent" id={211} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M678.962 15.0003L630.172 11.4141L685.239 7.72461L734.48 11.0693L678.962 15.0003Z" fill="transparent" id={212} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M786.96 14.6545L734.237 11.0685L786.546 7.37891L839.477 10.7236L786.96 14.6545Z" fill="transparent" id={213} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M896.163 14.3098L839.44 10.7237L888.886 7.03418L945.576 10.3789L896.163 14.3098Z" fill="transparent" id={214} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M734.375 11.0693L685.134 7.759L737.133 4.27637L786.65 7.3797L734.375 11.0693Z" fill="transparent" id={215} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M839.477 10.7234L786.546 7.37863L835.891 3.896L888.886 7.03379L839.477 10.7234Z" fill="transparent" id={216} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>
      <path d="M786.65 7.37914L737.133 4.2758L786.269 1L835.992 3.8965L786.65 7.37914Z" fill="transparent" id={217} stroke="white" stroke-width="1.4" stroke-miterlimit="10"/>    
    </g>

    <defs>
      <clipPath id="clip0_1970_250">
        <rect width="1754" height="936" fill="white"/>
      </clipPath>
    </defs>
  </svg>
</div>
  
<style>
  .infinite-square-3d {
    position: fixed;
    top: 0;
    z-index: -50;
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }

  .infinite-square-3d svg path {
    opacity: 0.2;
  }
</style>

