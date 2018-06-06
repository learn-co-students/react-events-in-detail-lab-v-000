import React from 'react';

export default class DelayedButton extends React.Component {

	handleClick = (event) => {
		event.persist();
		setTimeout(this.props.onDelayedClick, this.props.delay, event);
		// setTimeout(function, milliseconds, param1, param2,...)
	}

	render() {
		return (
			<button onClick={this.handleClick}>Delayed Event</button>
		);
	}
}
