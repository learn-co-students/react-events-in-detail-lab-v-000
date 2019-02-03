import React, {Component} from 'react'

class DelayedButton extends Component {

    handleClick=(event)=> {
        event.persist();
        setTimeout(()=> {this.props.onDelayedClick(event)}, this.props.delay)
    }

    render() {
        return (
            <div><button id="button" onClick={this.handleClick}>Delayed Button</button></div>
        )
    }
}

export default DelayedButton;
