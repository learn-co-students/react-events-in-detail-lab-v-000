import React from 'react'

export default class DelayedButton extends React.Component {
		
	triggerDelay(e){
		
		e.persist()

		setTimeout(
			this.props.onDelayedClick(e), this.props.delay).bind
	}

	render () {
		return (
			<button onClick={this.triggerDelay}>
				Delay Me
			</button>
		)
	}
}
