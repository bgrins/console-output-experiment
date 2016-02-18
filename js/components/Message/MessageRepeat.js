import React, { PropTypes } from "react";

function MessageRepeat(props) {
  return (
    <span value="{props.repeats}" className="message-repeats">
      {props.repeats}
    </span>
  );
}

export default MessageRepeat;
