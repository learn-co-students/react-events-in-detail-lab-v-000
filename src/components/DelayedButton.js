import React, { Component } from 'react';

export default class DelayedButton extends Component {

  render(){
    return (
      <div className="DelayedButton">
        <button onClick={ (event) => {event.persist()
          setTimeout(() => this.props.onDelayedClick(event), this.props.delay)} }>
        </button>
      </div>
    )
  }

}
