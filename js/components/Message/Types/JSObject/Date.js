import React, { PropTypes } from "react";

DateComponent.propTypes = {
  message: PropTypes.shape({
    class: PropTypes.string,
    preview: PropTypes.shape({
      timestamp: PropTypes.number.isRequired
    }).isRequired,
  }).isRequired,
}

function DateComponent(props) {
  let anchorClass;
  let anchorText;
  let dateString;
  const timestamp = props.message.preview.timestamp;

  if (typeof timestamp === "number") {
    // @TODO Figure out how to open in Variables View
    anchorText = props.message.class + " ";
    anchorClass = "cm-variable"
    dateString = new Date(timestamp).toISOString();
  }
  else {
    anchorText = new Date(timestamp).toString() + " ";
  }

  return (
    <span className="class-Date">
      <a className={anchorClass} href="#" draggable="false">
        {anchorText}
      </a>
      <span className="cm-string-2">
        {dateString}
      </span>
    </span>
  );
}

export default DateComponent;
