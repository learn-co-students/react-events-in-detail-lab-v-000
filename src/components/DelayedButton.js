// Code DelayedButton Component Here

import React from 'react';

export default class DelayedButton extends React.Component {

	delay = 0

	setDelay = (event) => {

	    event.persist();
	    setTimeout(() => {
	      this.props.onDelayedClick(event);
	    }, this.props.delay);
	}



	render() {
		return (
			<button onClick={this.setDelay}>Click</button>
		)
	}
}