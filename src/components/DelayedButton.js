// Code DelayedButton Component Here
import React from 'react'

class DelayedBotton extends React.Component {

	clickDelayer = (event) => {
		event.persist();
		setTimeout(() => {
	      this.props.onDelayedClick(event);
    	  }, this.props.delay);
	}

	render() {
		return (
			<button onClick={this.clickDelayer} />
		)
	}
}

export default DelayedBotton;