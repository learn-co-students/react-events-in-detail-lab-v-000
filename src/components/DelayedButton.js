// Code DelayedButton Component Here
import React from 'react'


const DelayedButton = ({onDelayedClick, delay}) => {

    let handleClickDelay = (e) => {
        e.persist()
        setTimeout(()=>onDelayedClick(e),delay)
    }
    return (
        <button onClick={handleClickDelay}>Delay Click </button>
    )
}


export default DelayedButton;
