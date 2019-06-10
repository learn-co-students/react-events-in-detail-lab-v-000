// Code DelayedButton Component Here
import React from 'react';
import ReactDOM from 'react-dom';


export default class DelayedButton extends React.Component {

  handleClick = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)

  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>Click</button>
        </div>
    );
  }
}

