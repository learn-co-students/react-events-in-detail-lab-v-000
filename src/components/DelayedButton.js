import React, { Component} from 'react'
export default class DelayedButton extends Component {

	setTimeout = (event) => {
		event.persist()
		this.props.delay
		this.props.onDelayedClick(event)
	}

	render(){
		return (
			<button
			onClick={this.setTimeout}>
			</button>
		)
	}
}