import React, { Component} from 'react'


class CoordinatesButton extends Component {

    handleButtonClick=(event)=> {
        return this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }

    render() {
        return (
            <div>
                <button type="button" id="button" onClick={this.handleButtonClick}>Coordinates Button</button>
            </div>
        )
    }
}

export default CoordinatesButton;