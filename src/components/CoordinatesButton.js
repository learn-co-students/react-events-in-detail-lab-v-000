// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

  getXY = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return(
      <div>
        <button onClick={this.getXY}/>
      </div>
    )
  }
}
 export default CoordinatesButton
