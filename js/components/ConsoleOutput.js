import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import messageTypes from "./Message/Types";

class ConsoleOutput extends Component {
  componentWillUpdate() {
    let node = ReactDOM.findDOMNode(this);
    this.shouldScrollBottom = isScrolledToBottom(node.firstChild, node);
  }

  componentDidUpdate() {
    if (this.shouldScrollBottom) {
      let node = ReactDOM.findDOMNode(this);
      node.scrollTop = node.scrollHeight;
    }
  }

  render() {
    let messageNodes = this.props.messages.map(function(message) {
      const MessageType = messageTypes[message.messageType];
      return (<MessageType message={message}></MessageType>)
    });

    return (
      <div className="output-wrapper">
        <div id="output-container"
             tabindex="0"
             role="document"
             aria-live="polite">{messageNodes}</div>
      </div>
    );
  }
}


function isScrolledToBottom(outputNode, scrollNode) {
  let lastNodeHeight = outputNode.lastChild ?
                       outputNode.lastChild.clientHeight : 0;
  return scrollNode.scrollTop + scrollNode.clientHeight >=
         scrollNode.scrollHeight - lastNodeHeight / 2;
}

export default ConsoleOutput;
