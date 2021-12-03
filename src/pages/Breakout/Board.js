import React, {useRef, useEffect} from 'react'
import { BallMovement } from './BallMovement'
import WallCollision from './util/WallCollision'
import Paddle from './Paddle'
import data from './data'
import Brick from './Brick'
import  BrickCollision from './util/BrickCollision'
import PaddleHit from './util/PaddleHit'
import PlayerStats from './PlayerStats'
import AllBroken from './util/AllBroken'
import ResetBall from './util/ResetBall'

let bricks = []

let { ballObj, paddleProps, brickObj, player } = data

export default function Board() {

  const canvasRef = useRef(null)

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      paddleProps.y = canvas.height - 30

      let newBrickSet = Brick(3, bricks, canvas, brickObj)
//AssignBricks
      if (newBrickSet && newBrickSet.length > 0) {
        bricks = newBrickSet
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      PlayerStats(ctx, player, canvas)

      if(player.lives === 0) {
        alert('Game Over! Press ok to restart')
        
        player.lives = 5
        player.level = 1
        player.score = 0
        ResetBall(paddleProps, canvas, ballObj)
        bricks.length = 0
      }
//Display bricks
      bricks.map((brick) => {
        return brick.draw(ctx)
      })
//Handle Ball Movement
      BallMovement(ctx, ballObj)
//Check all broken
      AllBroken(bricks, player, canvas, ballObj)

//Ball and Wall Collision
      WallCollision(ballObj, canvas, player, paddleProps)

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
          player.score += 10
        }
      }

      Paddle(ctx, canvas, paddleProps)


//Paddle + Ball Collision
      PaddleHit(ballObj, paddleProps)
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
