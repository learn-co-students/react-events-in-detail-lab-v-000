import React from 'react';

class CoordinatesButton extends React.Component{
    getCoordination = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }

    render(){
        return(
            <div>
                <button onClick={this.getCoordination}>Coordinates Button</button>
            </div>    
        );
    }
}

export default CoordinatesButton;