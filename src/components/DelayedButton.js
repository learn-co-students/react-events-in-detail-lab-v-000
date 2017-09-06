import React from 'react';

export default class DelayedButton extends React.Component {
    delayMe = (e) => {
     e.persist();
     setTimeout(() => {
       this.props.onDelayedClick(e)}, this.props.delay);
   }
 
   render(){
     return(
       <button onClick={this.delayMe}>Delay me!</button>
     )
   }
 }
