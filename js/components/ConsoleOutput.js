import React, { Component } from 'react';
import Message from "./Message";

class ConsoleOutput extends Component {
  render() {
    let messageNodes = this.props.messages.map(function(message) {
      return (<Message message={message}></Message>)
    });
    return (
      <div>{messageNodes}</div>
    );
  }
}

export default ConsoleOutput;
