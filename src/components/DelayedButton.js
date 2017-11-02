// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {
	onClick = (event) => {
		const target = event.target;
		event.persist();
		setTimeout(() => {
			this.props.onDelayedClick(event)
	  }, this.props.delay)
	}

	render () {
		return (
			<button onClick={this.onClick}/>
		)
	}
}