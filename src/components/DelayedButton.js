// Code DelayedButton Component Here
import React, {Component} from 'react'

class DelayedButton extends Component {


	handleClick = (e) => {
		e.persist();
		setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
	}


	render() {
		return (
			<button className='delayedButton' onClick={this.handleClick}>Delay Button</button>
		)
	}
}


export default DelayedButton;