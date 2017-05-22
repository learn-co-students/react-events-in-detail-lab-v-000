import React from 'react';

class DelayedButton extends React.Component {
  constructor(){
    super();
    this.clickEvent = this.clickEvent.bind(this);
  };

  clickEvent(event){
    event.persist();
    var clickFunction = this.props.onDelayedClick.bind(this, event)
    setTimeout(clickFunction, this.props.delay);
  };

  render(){
    return (
      <button onClick={this.clickEvent}>Coordinates Button</button>
    )
  };
};

export default DelayedButton;
