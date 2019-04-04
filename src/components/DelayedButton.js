// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

	setDelay = (event) => {
		event.persist();
		setTimeout(() => {this.props.onDelayedClick(event);}, this.props.delay)
	}


	render() {
		return(
			<button onClick={this.setDelay}>No Click Me!</button>
		)
	}
}
