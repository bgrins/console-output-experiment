import React, { PropTypes } from "react";
import MessageBody from "../MessageBody";
import MessageLocation from "../MessageLocation";
import BodyPieces from "../BodyPieces";

ConsoleGeneric.propTypes = {
  message: PropTypes.shape({
    arguments: PropTypes.array.isRequired,
  }).isRequired,
}

function ConsoleGeneric(props) {
  // @TODO actually handle repeat and location (and add prop definitions)
  let repeat = props.repeat ? <MessageRepeat /> : "";
  let location = props.location ? <MessageLocation target="jsdebugger" /> : "";

  return (
    <MessageBody wrapper>
      <span className="message-flex-body">
        <span className="message-body devtools-monospace">
          <BodyPieces pieces={props.message.arguments} />
          {repeat}
          {location}
        </span>
      </span>
    </MessageBody>
  );
}

export default ConsoleGeneric;
