// Code DelayedButton Component Here
import React, { Component } from 'react';


export default class DelayedButton extends Component {

  handleDelayClick = (event) =>{
    console.log(this.props.delay)
    //const eType = e.type
    //console.log(eType)
    //setTimeout(this.props.onDelayedClick(eType), this.props.delay);
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    },this.props.delay)
  }


  render() {
    return (
      <div>
        <button onClick={this.handleDelayClick}>Delayed Click</button>
      </div>
    )
  }

}
