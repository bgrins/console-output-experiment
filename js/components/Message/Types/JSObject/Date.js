import React, { PropTypes } from "react";

DateComponent.propTypes = {
  message: PropTypes.shape({
    preview: PropTypes.shape({
      timestamp: PropTypes.number.isRequired
    }).isRequired,
  }).isRequired,
}

function DateComponent(props) {
  const timestamp = props.message.preview.timestamp;
  const dateString = new Date(timestamp).toISOString();
  // @TODO handle invalid dates
  // @TODO Figure out how to open in Variables View
  // @TODO does this really need the draggable: false attribute?
  const anchor = <a className="cm-variable" href="#">Date </a>
  return (
    <span className="class-Date">
      {anchor}
      <span class="cm-string-2">
        {dateString}
      </span>
    </span>
  );
}

export default DateComponent;
