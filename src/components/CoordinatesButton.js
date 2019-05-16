import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  
  constructor(props) {
    super(props)
		this.state = {
      bubbleCoordinates: this.props.onReceiveCoordinates
    }
  }

  handleClick = (e) => {const x_y = [e.clientX, e.clientY]
											this.state.bubbleCoordinates(x_y)
										}

  render() {
    return (
      <div className="no-delay">
				<button onClick={e => this.handleClick(e)}>Coordinates Button</button>
      </div>
    )
  }
  
}
