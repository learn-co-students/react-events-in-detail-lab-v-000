import React from 'react';



const coordinatesButton = (props) => {

  const createCoordinatesArrayHandler = (event) => {
    props.onReceiveCoordinates([event.clientX, event.clientY])
  }
  return(
    <div className='CoordinatesButton'>
      <button onClick={createCoordinatesArrayHandler}>Setup Coordinates</button>
    </div>
  )
}

export default coordinatesButton;
