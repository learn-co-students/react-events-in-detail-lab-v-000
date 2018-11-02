import React, {Component} from 'react';


export default class DelayedButton extends Component {
  clickButton = (e) => {
    e.persist()
    setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
  }
   render(){
    return (
      <button onClick={this.clickButton}>
      </button>
    )
  }
}
