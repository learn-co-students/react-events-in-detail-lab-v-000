import React from 'react';

const CoordinatesButton = (props) => {

  const handleClick = (e) => {
    props.onReceiveCoordinates([e.screenX, e.screenY])
  }

  return(
    <div>
      <button onClick={handleClick}>click here</button>
    </div>
  )
}

export default CoordinatesButton;
