import React from 'react'
import Circle from './Circle'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      circles: [
        {
          cx: props.width / 2,
          cy: props.height / 2,
          level: 0,
          r: 256
        }
      ]
    }
    this.createCircles = this.createCircles.bind(this)
  }
  createCircles(parentCircle) {
    this.setState({
      circles: [...this.state.circles, 
        {
          cx: parentCircle.cx - parentCircle.r,
          cy: parentCircle.cy,
          level: parentCircle.level + 1,
          r: parentCircle.r / 2
        },
        {
          cx: parentCircle.cx + parentCircle.r,
          cy: parentCircle.cy,
          level: parentCircle.level + 1,
          r: parentCircle.r / 2
        },
        {
          cx: parentCircle.cx,
          cy: parentCircle.cy - parentCircle.r,
          level: parentCircle.level + 1,
          r: parentCircle.r / 2
        },
        {
          cx: parentCircle.cx,
          cy: parentCircle.cy + parentCircle.r,
          level: parentCircle.level + 1,
          r: parentCircle.r / 2
        }
      ]
    })
  }

  render() {
    return (
      <svg width={this.props.width} height={this.props.height} >
        {this.state.circles.map(smallCircle => {
          return (
            <Circle cx={smallCircle.cx} cy={smallCircle.cy} r={smallCircle.r} onMouseOver={this.createCircles.bind(null, smallCircle)} />
          )
        })}
      </svg >
    )
  }
}

export default App
