import React, { PropTypes } from "react";
import BodyPiece from "./BodyPiece";

BodyPieces.propTypes = {
  pieces: PropTypes.array.isRequired
}

function BodyPieces(props) {
  //@TODO add support for styles.

  let pieces = props.pieces.map(function(piece, i) {
    const separator = " ";
    // Body pieces don't ever change order so we can use the index
    // as a unique ID to prevent the warning: https://fb.me/react-warning-keys
    return (
      <span key={i}>
        <BodyPiece piece={piece} />
        {separator}
      </span>
    );
  });
  return (
    <span>{pieces}</span>
  );
}

export default BodyPieces;
