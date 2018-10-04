import React from 'react'

export default class CoordinatesButton extends React.Component{

    handleClick = (evt) => {
        const coordinates = [evt.clientX, evt.clientY]
        this.props.onReceiveCoordinates(coordinates)
    }
    render() {
        return(
            <button onClick={this.handleClick}>
                CoordinatesButton
            </button>
        )
    }
}

