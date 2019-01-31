import React, { Component } from 'react'

export default class CoordinatesButton extends Component{

    constructor(props){
        super(props)
    }

    render(){

        return <button onClick={(e) => setTimeout(() => {e.persist(); this.props.onDelayedClick(e, this.props.delay)})}>Delayed Button</button>
    }

}
