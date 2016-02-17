import React, { PropTypes } from "react";
import MessageBody from "../MessageBody";
import JSObjectTypes from "./JSObject";

JavaScriptEvalOutput.propTypes = {
  message: PropTypes.shape({
    type: PropTypes.string.isRequired,
    class: PropTypes.string
  }).isRequired,
}

function JavaScriptEvalOutput(props) {
  const message = props.message;
  let ComponentClass;
  if (message.type == "object") {
    ComponentClass = JSObjectTypes[message.class];
  }

  return (
    <MessageBody wrapper>
      <span className="message-flex-body">
        <span className="message-body devtools-monospace">
          <ComponentClass message={message} />
        </span>
      </span>
    </MessageBody>
  );
}

export default JavaScriptEvalOutput;
