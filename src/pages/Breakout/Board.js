import React, {useRef, useEffect} from 'react'
import { BallMovement } from './BallMovement'
import WallCollision from './util/WallCollision'
import Paddle from './Paddle'
import data from './data'
import Brick from './Brick'
import  BrickCollision from './util/BrickCollision'

let bricks = []

let { ballObj, paddleProps, brickObj } = data

export default function Board() {

  const canvasRef = useRef(null)

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      let newBrickSet = Brick (2, bricks, canvas, brickObj)
//AssignBricks
      if (newBrickSet && newBrickSet.length > 0) {
        bricks = newBrickSet
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height)
//Display bricks
      bricks.map((brick) => {
        return brick.draw(ctx)
      })
//Handle Ball Movement
      BallMovement(ctx, ballObj)
//Ball and Wall Collision
      WallCollision(ballObj, canvas)

//Brick Collision
      let brickCollision

      for(let i = 0; i < bricks.length; i++) {
         brickCollision = BrickCollision(ballObj, bricks[i])
        if( brickCollision.hit && !bricks[i].broke) {

          if( brickCollision.axis === 'X') {
            ballObj.dx *= -1
            bricks[i].broke = true
          } else if ( brickCollision.axis === "Y") {
            ballObj.dy *= -1
            bricks[i].broke = true
          }
         
        }
      }

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
