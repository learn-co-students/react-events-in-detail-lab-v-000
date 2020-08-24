// Code CoordinatesButton Component Here
import React from 'react'

const CoordinatesButton = ({onReceiveCoordinates}) => {
    return <button onClick={(e) => onReceiveCoordinates([e.clientX, e.clientY])}> Coords </button>
}

export default CoordinatesButton;
