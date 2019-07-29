import React from 'react';

export default class CoordinatesButton extends React.Component {

    handleButton = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <button
                onClick={this.handleButton}
            >
                Mouse Coordinates
            </button>
        )
    }


}