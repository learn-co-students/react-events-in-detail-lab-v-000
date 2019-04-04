import React from 'react';

class DelayedButton extends React.Component {

	onMouseClick = event => {
		event.persist()
		setTimeout(() => {
			this.props.onDelayedClick(event)
		}, this.props.delay)
	}

	render() {
	    return (
	    	<div>
		    	<button onClick={this.onMouseClick}>>
		    	Click me</button>
	    	</div>
	    )
	}

}

export default DelayedButton;