// Code DelayedButton Component Here
import React, { Component} from 'react';

class DelayedButton extends Component {
    render() {
        
        const callBackFn = this.props.onDelayedClick;
        const delayFactor = this.props.delay;

        function eventPooling(event) {
            event.persist()
            setTimeout(function(){
                return callBackFn(event)
            }, delayFactor)
        }

        return <button onClick={eventPooling}>Hello World!(DelayedButton)</button>
    }
}

export default DelayedButton