const React = require('react');


class DelayedButton extends React.Component {
  constructor(){
    super();

    this.onClick = this.onClick.bind(this)
  }

  onClick(event){
    event.persist(); // this allows us to store the event and call it
    
    setTimeout(
      () => {
        this.props.onDelayedClick(event)}, this.props.delay); 
  }

  render(){
    return(
      <button onClick={this.onClick}>Click</button>
    );
  };

}
// setTimeout(function(){ 
//   alert("Hello"); }, 3000);

module.exports = DelayedButton;
