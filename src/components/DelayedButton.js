// Code DelayedButton Component Here

import React from 'react'

class DelayedButton extends React.Component {

    delayedButtonClick = (event) => {
        event.persist()
        let p = this.props 
        setTimeout(function(){
            p.onDelayedClick(event)
        }, p.delay)
    }

    render(){
        return (
            <button onClick={this.delayedButtonClick}>Oh hi</button>
        )
    }
}

export default DelayedButton