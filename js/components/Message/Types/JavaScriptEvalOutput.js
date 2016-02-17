import React, { PropTypes } from "react";
import MessageBody from "../MessageBody";
import JSObjectTypes from "./JSObject";

JavaScriptEvalOutput.propTypes = {
  message: PropTypes.shape({
    type: PropTypes.string.isRequired,
    class: PropTypes.string,
    category: PropTypes.string.isRequired,
    timeStamp: PropTypes.number.isRequired,
  }).isRequired,
}

function JavaScriptEvalOutput(props) {
  const message = props.message;
  let ComponentClass;
  if (message.type == "object") {
    ComponentClass = JSObjectTypes[message.class];
  }

  return (
    <MessageBody message={props.message} isFlexed>
      <ComponentClass message={message} />
    </MessageBody>
  );
}

export default JavaScriptEvalOutput;
