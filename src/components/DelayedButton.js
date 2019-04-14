// Code DelayedButton Component Here
import React from 'react' 

class DelayedButton extends React.Component {

  //handle click & pass event as argument
  handleClick = (event) => {
    event.persist()                //persist event so you can access data later
    setTimeout(() => {                      //setTimeout to this.props.delay
      this.props.onDelayedClick(event)      //pass event to props.onDelayedClick
    }, this.props.delay
    )
  }

  //render button & pass to handleClick onClick
  render() {           
    return (
      <button onClick={this.handleClick}>Delay</button>
    )
  }
}

export default DelayedButton