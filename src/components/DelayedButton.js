import React, { Component } from 'react';

export default class DelayedButton extends Component {
  
  constructor(props) {
    super(props)
    this.state = { 
      bubbleEvent: this.props.onDelayedClick,
			delay: this.props.delay
    }
  }

  handleClick = (e) => {
										e.persist()
										const bubbleHandle = () => (this.state.bubbleEvent(e))
										setTimeout(bubbleHandle, this.state.delay)
									}

  render() {
    return (
      <div className="delay">
        <button onClick={e => this.handleClick(e)}>Delayed Button</button>
      </div>
    )
  }
  
}

