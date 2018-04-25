import React from 'react'
export default class CoordinatesButton extends React.Component {
  clickFunction = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }
  render(){
    return (
      <button onClick={this.clickFunction}/>
    )
  }
}
