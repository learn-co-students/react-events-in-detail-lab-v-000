import React from 'react';

export default class DelayedButton extends React.Component {

  clicked = (event) =>{
    event.persist();
    setTimeout(() => {
     this.props.onDelayedClick(event);
    }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.clicked}>Delay Button</button>
    )
  }
}
