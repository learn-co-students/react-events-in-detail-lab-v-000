import React from 'react';

class CoordinatesButton extends React.Component {
    constructor(){
        super();
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        this.props.onReceiveCoordinates([e.clientX, e.clientY]);    
    }
    
    render() {
        return (
            <button onClick={ this.handleClick }>Click Here</button>    
        );
    }
}

export default CoordinatesButton;