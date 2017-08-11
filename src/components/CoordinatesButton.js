import React from 'react';

export default class CoordinatesButton extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>
          Click Me!
        </button>
      </div>
    ) 
  }
}




// import React from 'react';

// export default class Keypad extends React.Component {
//   constructor() {
//     super();

//     this.passcode = this.passcode.bind(this);
//   }

//   passcode() {
//     console.log('Entering password...');
//   }

//   render() {
//     return (
//       <div>
//         <input type="password" onKeyUp={this.passcode} />
//       </div>
//     )
//   }
// }