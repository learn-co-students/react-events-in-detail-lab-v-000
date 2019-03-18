// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component {

	myFunction = (event) => {
		event.persist();
		this.props.onDelayedClick(event);
	}

	render() {
		return (
			<button onClick={this.myFunction} />
		)
	}

}