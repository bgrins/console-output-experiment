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

  const attributes = {
    className: "message"
    // @TODO Determine if category, severity and filter really need to be
    // attributes here, or if they are just used for the filter actions.
  };
  // @TODO Under what circumstances is this true?
  if (message.category == "input") {
    attributes.ariaLive = "off";
  }

  // @TODO add indent and prefix
  const indent = "";
  const prefix = "";

  const messageBody = React.createElement(
    messageTypes[message.messageType],
    { message }
  );

  // @TODO handle input and server message categories
  const category = "output";

  // @TODO handle other severities
  const severity = "warning";

  return (
    <div className="message" data-category={category} data-severity={severity}>
      <MessageTimestamp timestamp={message.timeStamp} />
      <MessageIcon />
      {prefix}
      {messageBody}
    </div>
  );
}

export default Message;
