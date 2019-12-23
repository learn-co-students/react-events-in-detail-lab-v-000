import React, { Component } from 'react';

export default class DelayedButton extends Component {
	clickDelay = (e) => {
		e.persist();

		let event = e;
		let delayTimer = this.props.delay;		

		setTimeout( () => {
			this.props.onDelayedClick(event)
		}, delayTimer);
	}

	render() {
		return (
			<button onClick={this.clickDelay}></button>
		)
	}
}