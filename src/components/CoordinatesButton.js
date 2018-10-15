import React from 'react';


export default class CoordinatesButton extends React.Component {

    handleButtonClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }

    render() {
        return (
            <button onClick={this.handleButtonClick}>Coords</button>
        );
    }
}
