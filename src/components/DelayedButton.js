import React from 'react';

export default class DelayedButton extends React.Component {
  constructor(props) {
      super(props);
      this.wham = this.wham.bind(this);
  }

  wham = (event) => {
    event.persist();
    setTimeout((e) => this.props.onDelayedClick(event), this.props.delay);
  }


  render() {
  return(
      <button onClick={this.wham}>que c\'est</button>
  )
}
}
