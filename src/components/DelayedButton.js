import React from 'react';
class DelayedButton extends React.Component {


    holdOn = (event) => {
        let timer = this.props.delay;
        let afterDelay = () => {
            event.persist();
            this.props.onDelayedClick(event)
        };
        setTimeout(afterDelay, timer);
    }

    render () {
        return (
            <div className="delayed-button">
              <button onClick={this.holdOn}>Delay</button>
           </div>
        )
    }
};

export default DelayedButton;
