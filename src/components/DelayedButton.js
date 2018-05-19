import React from 'react'

class DelayedButton extends React.Component {

  // event handler functions
  handleClick = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render() {
    return (
      <div className="delayed-button">
        <button onClick={this.handleClick} />
      </div>
    )
  }
}

export default DelayedButton;
