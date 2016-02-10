import React, { PropTypes } from "react";
import BodyPiece from "./BodyPiece";

BodyPieces.propTypes = {
  pieces: PropTypes.array.isRequired
}

function BodyPieces(props) {
  //@TODO add support for styles.

  let pieces = props.pieces.map(function(piece) {
    const separator = " ";
    return (
      <span><BodyPiece piece={piece} />{separator}</span>
    );
  });
  return (
    <span>{pieces}</span>
  );
}

export default BodyPieces;
