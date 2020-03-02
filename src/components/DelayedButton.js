import React from 'react';

class DelayedButton extends React.Component {
	delayEvent = (e) => {
		e.persist();
		setTimeout(() => this.props.onDelayedClick(e), this.props.delay);
	}

	render() {
		return (
			<button onClick={this.delayEvent}></button>
		)
	}
}

export default DelayedButton;