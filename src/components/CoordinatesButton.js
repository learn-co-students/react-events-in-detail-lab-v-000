import React from 'react'

export default class CoordinatesButton extends React.Component{

  handleClick = (event) =>{
    this.props.onReceiveCoordinates([event.screenX, event.screenY])
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
