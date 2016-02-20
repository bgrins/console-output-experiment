import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import messageTypes from "./Message/Types";
import FilterInfo from "./FilterInfo";

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
    let searchText = this.props.searchText;
    let numHidden = 0;
    let messageNodes = this.props.messages.map(function(message) {
      const MessageType = messageTypes[message.messageType];

      // @TODO implement a smarter search
      if (searchText && message.arguments) {
        if (!message.arguments.join("").includes(searchText)) {
          numHidden++;
          return null;
        }
      }

      return (
        <MessageType key={message.uniqueID} message={message} />
      );
    }).filter(message=>message);

    // @TODO: Move filter info to new component and add 'clear filter' link
    return (
      <div className="output-wrapper">
        <FilterInfo numHidden={numHidden} />
        <div id="output-container"
             tabIndex="0"
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
