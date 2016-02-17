import React, { PropTypes } from "react";
import MessageBody from "../MessageBody";
import MessageLocation from "../MessageLocation";
import BodyPieces from "../BodyPieces";
import MessageStacktrace from "../MessageStacktrace";

ConsoleService.propTypes = {
  message: PropTypes.shape({
    errorMessage: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    timeStamp: PropTypes.number.isRequired,
    stacktrace: PropTypes.array.isRequired,
  }).isRequired,
}

function ConsoleService(props) {
  // @TODO do service messages get repeated?
  let errorMessage = props.message.errorMessage;
  return (
    <MessageBody message={props.message} isFlexed>
      {errorMessage}
      <MessageStacktrace stacktrace={props.message.stacktrace} />
    </MessageBody>
  );
}

export default ConsoleService;
