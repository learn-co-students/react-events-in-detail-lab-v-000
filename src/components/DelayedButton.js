import React from 'react';

class DelayedButton extends React.Component{
    getDelayedInfo = (event) => {
        event.persist();
        setTimeout(()=>{
            this.props.onDelayedClick(event)
        }, this.props.delay);
    }
    render(){
        return(
            <div>
                <button onClick={this.getDelayedInfo}>Delayed Button</button>
            </div>    
        );
    }
}
export default DelayedButton;