import React from 'react';


const delayedButton = (props) => {


  const logAfterTimeoutHandler = (event) => {
    event.persist();
    setTimeout(() => props.onDelayedClick(event), props.delay)
  }
  return(
    <div className='DelayedButton'>
      <button onClick={logAfterTimeoutHandler}>Delayed Log</button>
    </div>
  )
}

export default delayedButton;
