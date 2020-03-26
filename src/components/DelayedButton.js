// Code DelayedButton Component Here


import React, { Component } from 'react';

export default class DelayedButton extends React.Component{
  clickMe = (event) => {
    event.persist()
    setTimeout(() =>{
      this.props.onDelayedClick(event)
    },this.props.delay)
    
  }

  render(){
    return(
      <div>
      <button
      onClick={this.clickMe}></button>
      </div>
    )
  }
}
