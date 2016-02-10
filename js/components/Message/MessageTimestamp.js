import React, { PropTypes } from "react";

MessageTimestamp.propTypes = {
  timestamp: PropTypes.number.isRequired
}

function MessageTimestamp(props) {
  // @TODO replace with l10n.timestampString()
  return (
    <span className="timestamp devtools-monospace">
      {props.timestamp}
    </span>
  );
}

export default MessageTimestamp;
