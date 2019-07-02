import React from "react"

export default class CoordinatesButton extends React.Component {
    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.pageX, event.pageY])
    }
    
    render() {
        return (
            <div className="coordinatesButton">
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}