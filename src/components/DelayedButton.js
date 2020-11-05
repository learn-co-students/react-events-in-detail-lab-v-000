// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {

    handleClick = (event) => {
        event.persist()
        setTimeout(() => {
            return this.props.onDelayedClick(event)
        }, this.props.delayed)
    }

    render(){
        return(
            <button
            onClick={this.handleClick}
            >DelayedButton</button>
        )
    }
}