import React, { PropTypes } from "react";
import MessageTimestamp from "./MessageTimestamp";
import MessageIcon from "./MessageIcon";
import MessageBody from "./MessageBody";
import ConsoleGeneric from "./ConsoleGeneric";

Message.propTypes = {
  // @TODO might make more sense to pass in the message
  packet: PropTypes.shape({
    message: PropTypes.shape({
      // @TODO is this required?
      category: PropTypes.string.isRequired,
      timeStamp: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
}

function Message(props) {
  const { message } = props.packet;

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

  // @TODO figure out which property to switch on to determine message type.
  const messageBody = <ConsoleGeneric message={message} />;

  return (
    <div className="message">
      <MessageTimestamp timestamp={message.timeStamp} />
      <MessageIcon />
      {prefix}
      {messageBody}
    </div>
  );
}

export default Message;
