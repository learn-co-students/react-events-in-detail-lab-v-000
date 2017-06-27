import React from 'react';

export default class DelayedButton extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleClick = (event) => {
    event.persist()
    setTimeout(this.props.onDelayedClick, this.props.delay, event)
  }
  
  render () {
    return (
      <button onClick={this.handleClick}>Click me!</button>
    )
  }
}


//function onClick(event) {
//  console.log(event); // => nullified object.
//  console.log(event.type); // => "click"
//  const eventType = event.type; // => "click"
//
//  setTimeout(function() {
//    console.log(event.type); // => null
//    console.log(eventType); // => "click"
//  }, 0);
//
//  // Won't work. this.state.clickEvent will only contain null values.
//  this.setState({clickEvent: event});
//
//  // You can still export event properties.
//  this.setState({eventType: event.type});
//}