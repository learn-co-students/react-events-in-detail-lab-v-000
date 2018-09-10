// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component{

  displayEvent = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }


  render(){
    return(
      <div>
        <button onClick={this.displayEvent}>time me out</button>
      </div>
    )
  }


}
