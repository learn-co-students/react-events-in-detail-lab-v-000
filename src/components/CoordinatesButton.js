import React from 'react';
class CoordinatesButton extends React.Component {

    onTheButtonClick = (event) => {
        let mouseWhereabouts = [event.pageX, event.pageY];
        this.props.onReceiveCoordinates(mouseWhereabouts);
    };

    render () {
        return (
            <div className="coordinates-button" >
            <button onClick={this.onTheButtonClick}>Click</button>
            </div>

        )
    }
};

export default CoordinatesButton;
