import { useEffect } from 'react'

const MatrixEffectBackground: React.FC = () => {
  useEffect(() => {
    document.body.style.backgroundColor = 'transparent'

    const canvas = document.getElementById('canv') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const w = (canvas.width = document.body.offsetWidth)
    const h = (canvas.height = document.body.offsetHeight)
    const cols = Math.floor(w / 20) + 1
    const ypos = Array(cols).fill(0)

    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, w, h)

    const matrix = () => {
      ctx.fillStyle = '#0001'
      ctx.fillRect(0, 0, w, h)

      ctx.fillStyle = '#949227'
      ctx.font = '15pt monospace'

      ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128)
        const x = ind * 20
        ctx.fillText(text, x, y)
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0
        else ypos[ind] = y + 20
      })
    }

    const interval = setInterval(matrix, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        backgroundColor: '#111111',
        aspectRatio: '1/1',
      }}
    >
      <canvas id='canv' width={500} height={200}></canvas>
    </div>
  )
}

export default MatrixEffectBackground
