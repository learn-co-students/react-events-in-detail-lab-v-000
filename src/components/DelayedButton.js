// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component{

    constructor(props){
        super(props);

        this.handlePress = this.handlePress.bind(this); // adds this.props to the funcitona
    }
    
    handlePress(event) {
        event.persist(); // persist the event so it is not returned to the pool
        setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    }
    render(){
        return <button onClick={this.handlePress} />
    }
}