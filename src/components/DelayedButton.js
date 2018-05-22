
import React from 'react'

class DelayedButton extends React.Component {
  clickHandler = (event) => {
    event.persist();
    
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Delayed</button>
      </div>
    );
  }
}

export default DelayedButton
