// Code DelayedButton Component Here
// Code CoordinatesButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      onDelayedClick: this.props.onDelayedClick,
      delay: this.props.delay
    }
  }

  handleClick = (event) => {
    event.persist()// has to put when anonymous function
    this.setState({ onDelayedClick:
      setTimeout(() => this.props.onDelayedClick(event), this.props.delay)})
  }

  render(){
    return (
      <button onClick={this.handleClick}> Click Me!</button>
    );
  }

}

export default DelayedButton;
