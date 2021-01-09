// Code CoordinatesButton Component Here
import React, { Component } from "react";

    class CoordinatesButton extends Component {

        callback = (event) => {
            this.props.onReceiveCoordinates([event.clientX, event.clientY])
        }

        render() {
            return (
                <div>
                    <button onClick={this.callback}>Click Me!</button>

                </div>
            )
        }


    }

export default CoordinatesButton;