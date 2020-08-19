// Code DelayedButton Component Here
import React from 'react'
// import { render } from 'enzyme'

export default class DelayedButton extends React.Component{
    delayCallback = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
        
        
    }
    render(){
        return(
            <button onClick={this.delayCallback}>Delayed</button>
        )
    }
}