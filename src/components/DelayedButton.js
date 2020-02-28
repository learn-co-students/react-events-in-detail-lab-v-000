// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component{
	persistEv = (event) => {
		event.persist()
		setTimeout(() => {
			this.props.onDelayedClick(event)
		}, this.props.delay)
	}
	render(){
		return (<button onClick={this.persistEv}></button>)
	}
}

export default DelayedButton