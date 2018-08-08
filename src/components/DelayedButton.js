// Code DelayedButton Component Here
import React, {Component} from 'react'


export default class DelayedButton extends Component{
    
   
    
    render(){
        return(
            <button onClick={ (event) => {
            event.persist()
            const cb=this.props.onDelayedClick
            
            setTimeout(function(){
                cb(event)
            },this.props.delay)}}    ></button>
        )
    }
    
}