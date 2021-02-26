// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e) => {
        let array = []
        array.push(e.clientX)
    }
    
    render () {
        return (
            <button onClick={event => this.handleClick(this.props.clientX, this.props.clientY)}>Coordinates</button>
        )
    }
}