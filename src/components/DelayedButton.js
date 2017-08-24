import React from 'react'

export default class CoordinatesButton extends React.Component {
  handleClick = (event) => {
    setTimeout(() => {
      event.persist();
      this.props.onDelayedClick(event);
    },this.props.delay);
 }

 render() {
   return (
     <button onClick={this.handleClick} />
   );
 }
}
