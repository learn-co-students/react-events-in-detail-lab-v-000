import React from 'react';

class DelayedButton extends React.Component {
  constructor() {
  super()

  this.handleClick = this.handleClick.bind(this)
}

handleClick(event) {
  event.persist()
  setTimeout(() => {
    this.props.onDelayedClick(event)
  }, this.props.delay)
  
}

render()  {
  return(
    <div>
    <button onClick={this.handleClick}>Button</button></div>
    );
}

}

module.exports = DelayedButton