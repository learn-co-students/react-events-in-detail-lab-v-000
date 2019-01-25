import React from 'react'

export default class DelayedButton extends React.Component{

  handleClick = (event) =>{
    this.props.onDelayedClick(event)
    event.persist();
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}
