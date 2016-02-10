import React, { Component } from 'react';
import Message from "./Message/Message";

class ConsoleOutput extends Component {
  render() {
    let messageNodes = this.props.messages.map(function(packet) {
      return (<Message packet={packet}></Message>)
    });
    return (
      <div>{messageNodes}</div>
    );
  }
}

export default ConsoleOutput;
