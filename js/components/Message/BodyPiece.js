import React, { PropTypes } from "react";
import { isPrimitive, getString } from "../../utils/VariablesViewUtils";

BodyPiece.propTypes = {
  // @TODO This currently only supports strings. It needs to be expanded to
  // cover other types.
  piece: PropTypes.oneOfType([
    React.PropTypes.string
  ]).isRequired,
}

function BodyPiece(props) {
  return (
    <span>{getTextContent(props.piece)}</span>
  );
}

// Helpers
function getTextContent(piece) {
  if (isPrimitive({ value: piece })) {
    // @TODO actually handle the "noStringQuotes" and "concise" options.
    return getString(piece, {
      noStringQuotes: true,
      concise: true,
    });
  }
}

export default BodyPiece;
