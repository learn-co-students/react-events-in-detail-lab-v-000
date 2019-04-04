// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {
    // takes in this.props.onDelayedClick ==> a function
    // takes in this.props.delay ==> a number

    handleClick = (event) => {
        event.persist()
        setTimeout(() => (this.props.onDelayedClick(event)), this.props.delay)
    }

    render() {
        return (
            <button onClick={this.handleClick}></button>
        )
    }
}