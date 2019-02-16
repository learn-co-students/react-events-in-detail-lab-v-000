// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
  handleDelayClick = (event) =>{
    event.persist()

    setTimeout( () => {
      this.props.onDelayedClick(event);
    },this.props.delay);

  }

  render(){
    return(
      <div>
      <button onClick={this.handleDelayClick}>This is a delay button</button>
      </div>
    )
  }
}
