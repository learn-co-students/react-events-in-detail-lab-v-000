// Code DelayedButton Component Here
import React, {Component} from 'react';


export default class DelayedButton extends Component {
  
  handleClick = (e) => {
    e.persist()
    const timeOutFunction = this.props.onDelayedClick(e)
    setTimeout(function(){timeOutFunction}, this.props.delay)
  }

  render (){
    return <button onClick={this.handleClick}></button>
  }
}