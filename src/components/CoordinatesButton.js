import React from 'react';
class CoordinatesButton extends React.Component { 
    //  constructor(props) {
    //     super(props); 
    //  }  
     
     handleClick = (event) => { 
         const coordinates = [event.pageX,event.pageY]
        this.props.onReceiveCoordinates(coordinates)
    }

        render() {
            return (
                <div>
                <button onClick={this.handleClick}></button>
                </div>
            );
        }
    }; 
export default CoordinatesButton;


        
    
