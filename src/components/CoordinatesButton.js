import React from 'react'

class CoordinatesButton extends React.Component {
  click = (event) => {
    this.props.onReceiveCoordinates([event.screenX, event.screenY])
  }

  // constructor(props) {
  //   super(props);
  //
  //   this.click = this.click.bind(this);
  //   this.state = {
  //     coordinates: [0, 0]
  //   }
  // }
  //
  // click = (event) => {
  //   this.state.coordinates = [event.screenX, event.screenY]
  //   debugger
  //   console.log('clicked')
  // }

  render() {
    return(
      <div>
        <button onClick={this.click}>Log your x and y coordinates</button>
      </div>
    )
  }
}

export default CoordinatesButton
