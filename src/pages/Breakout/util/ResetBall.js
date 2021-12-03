import React from 'react'

export default function ResetBall(paddleProps, canvas, ballObj) {
 ballObj.x = paddleProps.x 
 ballObj.y = paddleProps.y - 80
 ballObj.dx = 6 * (Math.random() * 2 - 1)
 ballObj.dy = -6
}
