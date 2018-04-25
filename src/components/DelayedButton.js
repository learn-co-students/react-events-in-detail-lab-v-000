import React from 'react'
export default class DelayedButton extends React.Component{
  constructor(props) {
    super(props);
    this.delay = setTimeout(()=> this.props.onDelayedClick())
  }

  firstFunction = (event) => {
    event.persist();
    this.props.delay;
    this.props.onDelayedClick(event);
  }
  render(){
    return(
      <button onClick={this.firstFunction}/>
    )
  }
}
