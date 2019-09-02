import React, { Component } from 'react';
// import  from './';



export default class DelayedButton extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  argumentPass = (event) => {
    event.persist();
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay);
  }



  render() {
    return (
      <div className="">
        <button onClick={this.argumentPass}></button>
      </div>
    )
  }
}
