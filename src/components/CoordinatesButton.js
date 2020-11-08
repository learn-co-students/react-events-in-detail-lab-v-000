// Code CoordinatesButton Component Here
// import { render } from 'enzyme';
import React from 'react';

class CoordinatesButton extends React.Component{
    createArray = (event) => {
        const coor = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(coor);
}

    render(){
        return(
         <button onClick={this.createArray}>See Coordinates</button>
        )
    }
}

export default CoordinatesButton;