// Code DelayedButton Component Here
import React, { Component } from 'react';
export default class DelayedButton extends Component {

	handleClick = (e) => {
		e.persist();
		let delayTime = this.props.delay
		setTimeout(() => { this.props.onDelayedClick(e) }, delayTime)
	}

	render(){
		return(
				<button onClick={this.handleClick} >
					DELAY
				</button>
			)
		}
	}
