import React from 'react';

export default class DelayedButton extends React.Component {

  handleDelay = (e) => {
    e.persist()
    setTimeout(() => {
      this.props.onDelayedClick(e)
    }, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.handleDelay}>Delay</button>
    )
  }
}



// 1. In the `components/DelayedButton.js` file, create a `DelayedButton` React component
// 2. This component takes two props: `onDelayedClick` (a function), and `delay` (a number). (These props are only passed in the test suite, you will have errors in the browser)
// 3. When the button is clicked, we want to persist the event so we can pass it to the `this.props.onDelayedClick()` in a `setTimeout()` block. The `setTimeout()` will be set to `this.props.delay`.
