import React, {useRef, useEffect} from 'react'


let x = 0
export default function Board() {

  const canvasRef = useRef(null)

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      ctx.beginPath();
      ctx.arc(x, 50, 50, 0, 2 * Math.PI, false);
      ctx.stroke();
      x++
      requestAnimationFrame(render)
    }
    
    render()
  }, [])


  return (
    <canvas id="canvas" ref={canvasRef} height="500px" width="800px"></canvas>
  )
}
