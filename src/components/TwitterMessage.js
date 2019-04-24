import React from "react";

class TwitterMessage extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //
  //   };
  // }

  state = {
    message: '',
    remainingChars: this.props.maxChars
  }


  handleMessageChange = event => {
  this.setState({
    message: event.target.value,
    remainingChars: this.props.maxChars - event.target.value.length

  })
}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMessageChange(event)}  value={this.state.message}/>
        <div>{this.state.remainingChars}
        </div>
      </div>
    );
  }
}

export default TwitterMessage;
