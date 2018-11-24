
import React, { Component } from 'react';


export default class DelayedButton extends Component {

    constructor(){
        super()

    }

    handleOnClick = (event) => {

        event.persist()
        const e = event;
        setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)


    }

    render(){
        return (
            <button onClick={this.handleOnClick}className='DelayedButton'>Delayed</button>
        )
    }
}
