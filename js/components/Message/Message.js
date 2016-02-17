import React, { PropTypes } from "react";
import MessageTimestamp from "./MessageTimestamp";
import MessageIcon from "./MessageIcon";
import MessageBody from "./MessageBody";
import messageTypes from "./Types";

Message.propTypes = {
  message: PropTypes.shape({
    // @TODO is this required?
    category: PropTypes.string.isRequired,
    timeStamp: PropTypes.number.isRequired
  }).isRequired
}

function Message(props) {
  const message = props.message;

  // @TODO This is needed for 'input' messages (jsterm input echoed back into output)
  if (message.category == "input") {
    attributes.ariaLive = "off";
  }

  // @TODO add indent and prefix
  const indent = "";
  const prefix = "";

  const MessageType = messageTypes[message.messageType];

  // @TODO handle input and server message categories
  const category = "output";

  // @TODO handle other severities.  Might be best to make the Message component
  // a child of the message types so that severity etc could be passed in as props
  // (similar to how messagebody is handled)
  const severity = "warning";

  return (
    <div className="message" data-category={category} data-severity={severity}>
      <MessageTimestamp timestamp={message.timeStamp} />
      <MessageIcon />
      {prefix}
      <MessageType message={message} />
    </div>
  );
}

export default Message;
