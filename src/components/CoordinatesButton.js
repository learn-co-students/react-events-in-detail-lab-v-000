// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component{
  constructor(props) {
    super();

    this.coordinateClick = this.coordinateClick.bind(this)
  }


  coordinateClick = (event) => {
      this.props.onReceiveCoordinates([event.pageX, event.pageY])
  }

  render(){
    return(
      <button onClick={this.coordinateClick} />
    )
  }

}
