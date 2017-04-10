import React from 'react';
import ReactDOM from 'react-dom';

export default class DelayedButton extends React.Component {
  constructor(){
    super();

    this.delayedButton = this.delayedButton.bind(this);
  };

  delayedButton(event){
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };

  render(){
    return(
      <button onClick={this.delayedButton}>Click me</button>
    );
  }
}
