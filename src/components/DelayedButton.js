// Code DelayedButton Component Here
import React, {Component} from 'react'; 

class DelayedButton extends Component{
	constructor(props){
		super(props)
		this.state = {
			onDelayedClick: this.props.onDelayedClick,
			delay: this.props.delay
		}
	}
	delayClickHandle(e){
		e.persist();
		var delayClick = function(){ this.state.onDelayedClick(e) }
		setTimeout( delayClick.bind(this), this.state.delay)
	}

	render(){
		return (<button onClick={this.delayClickHandle.bind(this)} >Delayed Button Log</button> );
	}
}


export default DelayedButton;

