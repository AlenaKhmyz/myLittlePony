import React, {useRef, useEffect} from 'react'
import { BallMovement } from './BallMovement'
import WallCollision from './util/WallCollision'
import Paddle from './Paddle'
import data from './data'

let { ballObj, paddleProps } = data

export default function Board() {

  const canvasRef = useRef(null)

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      ctx.clearRect(0, 0, canvas.width, canvas.height)
//Handle Ball Movement
      BallMovement(ctx, ballObj)
//Ball and Wall Collision
      WallCollision(ballObj, canvas)

      Paddle(ctx, canvas, paddleProps)

      requestAnimationFrame(render)
    }
    
    render()
  }, [])


  return (
    <canvas id="canvas" onMouseMove={(event) =>
     paddleProps.x = event.clientX - paddleProps.width / 2 - 10} 
     ref={canvasRef} height="500px" width="800px">
      
    </canvas>
  )
}
