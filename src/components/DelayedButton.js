import React from 'react';

class DelayedButton extends React.Component {
  causeDelay = (event) => {
    event.persist()
    setTimeout(()=>{this.props.onDelayedClick(event)}, this.props.delay)
  }
  render() {
    return(
      <button onClick={this.causeDelay} />
    )
  }
}
export default DelayedButton;
