import React from 'react';

class DelayedButton extends React.Component { 

	applyTimer = (event) => {
		event.persist();
		setTimeout(() => {
			this.props.onDelayedClick(event)
		}, this.props.delay);
	}

  render() {
    return (
      <button onClick={this.applyTimer}>Click me for Timer!</button>
    );
   }
}
 
export default DelayedButton;