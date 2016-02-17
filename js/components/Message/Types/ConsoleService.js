import React, { PropTypes } from "react";
import MessageBody from "../MessageBody";
import MessageLocation from "../MessageLocation";
import BodyPieces from "../BodyPieces";
import MessageStacktrace from "../MessageStacktrace";

ConsoleService.propTypes = {
  message: PropTypes.shape({
    errorMessage: PropTypes.string.isRequired,
  }).isRequired,
}

function ConsoleService(props) {
  // @TODO do service messages get repeated?
  // @TODO actually handle stack trace (and add prop definitions)
  let errorMessage = props.message.errorMessage;

  // @TODO: Should we use BodyPieces here if we don't have actual
  // arguments and just want to render a string?
  let args = [errorMessage];

  return (
    <MessageBody wrapper>
      <span className="message-flex-body">
        <span className="message-body devtools-monospace">
          <BodyPieces pieces={args} />
          <MessageStacktrace stacktrace={props.message.stacktrace} />
        </span>
      </span>
    </MessageBody>
  );
}

export default ConsoleService;
