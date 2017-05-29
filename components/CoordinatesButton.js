import React from 'react';

export default class CoordinatesButton extends React.Component {
    constructor() {
        super();

        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick(event) {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }
    
    render () {
        return (
            <div>
                <button onClick={this.buttonClick}>Coordinates</button>
            </div>
        )
    }
}