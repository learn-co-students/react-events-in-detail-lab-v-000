// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component {
      
      handleClick = (event) => {
        event.persist()
        // console.log(this.props.onDelayedClick)
        let OnDelayedFunc = () => (this.props.onDelayedClick(event));
        // console.log(OnDelayedFunc)
        setTimeout(OnDelayedFunc, this.props.delay)  
    }


    render(){
        return(
           <button onClick={this.handleClick}></button>
        )
    }
}