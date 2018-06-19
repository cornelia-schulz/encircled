import React from 'react'
import Circle from './Circle'

const App = props => {
  const circle = {
    cx: props.width / 2,
    cy: props.height / 2,
    level: 0,
    r: 256
  }

  let circles = [
    {
      cx: circle.cx / 2 -64,
      cy: circle.cy / 2,
      level: 1,
      r: 128
    },
    {
      cx: circle.cx / 2 +64,
      cy: circle.cy / 2,
      level: 1,
      r: 128
    },
    {
      cx: circle.cx / 2,
      cy: circle.cy / 2 -64,
      level: 1,
      r: 128
    },
    {
      cx: circle.cx / 2,
      cy: circle.cy / 2 +64,
      level: 1,
      r: 128
    }
  ]

  return (
    <svg width={props.width} height={props.height}>
      <Circle cx={circle.cx} cy={circle.cy} r={circle.r} />
      {circles.map(smallCircle => {
        return (
        <Circle cx={smallCircle.cx} cy={smallCircle.cy} r={smallCircle.r} />
        )})}
    </svg>
  )
}

export default App
