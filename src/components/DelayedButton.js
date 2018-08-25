// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component {

	// constructor(props){
	// 	super(props)
	// }
	
	delayEvent = (event) => {
		event.persist()
		setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
	
	}
	// delayEvent (e) {
	// 	console.log(e.target)
	// 	// setTimeout(() => {console.log(e.target)}, 1000)
	// 	setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
	// }

	render () {
		return (
			<button onClick={this.delayEvent}>Delay</button>
			)
	}

}