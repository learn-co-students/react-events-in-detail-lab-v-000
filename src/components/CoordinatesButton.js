// Code CoordinatesButton Component Here

import React from 'react';

export default class CoordinatesButton extends React.Component {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
     }

onClick(event) {
this.props.onReceiveCoordinates([event.clientX, event.clientY]);
}

render() {
return (
    <button onClick={this.onClick}>
        Coordinates
    </button>
);
}
}