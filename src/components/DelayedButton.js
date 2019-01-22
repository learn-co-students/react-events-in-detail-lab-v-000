// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component{


delayFunc = (e)=>{
  e.persist()
const dFunc= ()=>{ this.props.onDelayedClick(e)}
  setTimeout(dFunc, this.props.delay)
}


  render(){
    return (<div>
      <button onClick={this.delayFunc}>Delay</button>

      </div>)
  }
}
