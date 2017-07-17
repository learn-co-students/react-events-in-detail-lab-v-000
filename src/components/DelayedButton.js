import React from 'react';

class DelayedButton extends React.Component {
  
  constructor(props) {
    super()
    this.handleClick2 = this.handleClick2.bind(this)  
  }

  handleClick2(event) {
      event.persist()
      setTimeout(
        () => { this.props.onDelayedClick(event) },
        this.props.delay
      );
    }

  render() {
    return (
      <button onClick={this.handleClick2}/>
    )
  }
}

export default DelayedButton