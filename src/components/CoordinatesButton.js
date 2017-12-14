// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component{
    constructor(props){
        super(props);

        this.handlePress = this.handlePress.bind(this); // adds this.props to the funcitona
    }

    handlePress(event) {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    render(){
        return <button onClick={this.handlePress} />
    }
}
