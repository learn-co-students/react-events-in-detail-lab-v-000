import React, { Component } from 'react';

export default class DelayedButton extends Component {
  
  constructor(props) {
    super(props)
  }
  
  handleClick = (e) => {
    
    e.persist()

    setTimeout(() => {this.props.onDelayedClick(e)},this.props.delay)
    
   // this.props.onDelayedClick(e)
    //this.props.onDelayedClick()
  //  this.props.onDelayedClick(e)
  
  }

  render() {
    let callback = this.props.onDelayedClick
    
    return (
        <button onClick={this.handleClick} value="Delay"/>
    )
  }
  
}