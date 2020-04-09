// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
    handleClick = (event) => {
        const delayedFn = this.props.onDelayedClick 
        event.persist()
        setTimeout(function () { delayedFn(event) }, this.props.delay)
    }
    render() {
        return (
            <div className='delayed-button'>
                <button onClick = {this.handleClick.bind(this)}>
                    Wait For It...
                </button>
            </div>
        );
    }
}

export default DelayedButton;