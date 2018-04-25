import React from 'react'
export default class DelayedButton extends React.Component{
  firstFunction = (event) => {
    event.persist();
    this.props.onDelayedClick();
    this.props.delay = setTimeout();
  }
  render(){
    return(
      <button onClick={this.handleClick}/>
    )
  }
}
