import React from 'react'

class DelayedButton extends React.Component{
  handleClick = (e) => {
    e.persist();
    setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
  }

  render (){
    return(
      <div className="delayedButton">
        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}

export default DelayedButton;
