import React, { PropTypes } from "react";

Date.propTypes = {
  message: PropTypes.shape({
    preview: PropTypes.shape({
      timestamp: PropTypes.number.isRequired
    }).isRequired,
  }).isRequired,
}

function Date(props) {
  const timestamp = props.message.preview.timestamp;
  return (
    <span>{timestamp}</span>
  );
}

export default Date;
