import React from 'react';

class DelayedButton extends React.Component {

  handleClick = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }
 
  render() {
    return (
      <div>
        <button className="button btn-primary btn" onClick={this.handleClick}></button>
      </div>
    );
  }
}

export default DelayedButton;