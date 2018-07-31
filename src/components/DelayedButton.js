// Code DelayedButton Component Here

import React from 'react';



export default class DelayedButton extends React.Component{
  constructor(props){
    super(props)
  }

  handleClick = (event) => {
    this.props.onDelayedClick(event)
  }


  render(){
    return(
      <button onClick={this.handleClick}>Click me now! </button>
    )
  }


}
