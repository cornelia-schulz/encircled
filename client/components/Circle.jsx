import React from 'react'

class Circle extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      hoveredOver: false,
      children: []
    }

  }

  render () {
    return(
      <circle cx={this.props.cx} cy={this.props.cy} r={this.props.r} />
    )
  }
}

export default Circle