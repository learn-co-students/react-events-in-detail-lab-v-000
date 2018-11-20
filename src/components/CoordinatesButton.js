// Code CoordinatesButton Component Here
import React from 'react'; 

export default class CoordinatesButton extends React.Component{

    handleClick = (event) => {
            let coordArray = [event.clientX, event.clientY];
            this.props.onReceiveCoordinates(coordArray);
    }

    render(){
        return (
            <button onClick={this.handleClick}>Log Coordinates</button>
        )}
}
