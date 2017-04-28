import React from 'react'
import PropTypes from 'prop-types';

class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(ev) {
    this.props.onReceiveCoordinates([ev.clientX, ev.clientY])
  }

  render() {
    return (
      <button onClick={this.handleClick}></button>
    )
  }
}

CoordinatesButton.propTypes = {
  onReceiveCoordinates: PropTypes.func.isRequired
}

export default CoordinatesButton
