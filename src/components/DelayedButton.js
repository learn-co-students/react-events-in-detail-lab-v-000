import React, { Component } from 'react';
class DelayedButton extends Component {

  // constructor(props) {
  //   super(props)
  // }

  handleClick = (event) => {   
    let ev = event;
    let odc = this.props.onDelayedClick;
    let del = this.props.delay;
    
    setTimeout(() => {
      odc(ev)
    }, del);
  }

  render() { 
    return ( 
      <button onClick={this.handleClick}></button>
    );
  }
}
 
export default DelayedButton;