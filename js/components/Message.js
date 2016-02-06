import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div>Message: {this.props.message}</div>
    );
  }
}

export default Message;
