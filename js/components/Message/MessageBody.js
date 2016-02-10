import React, { PropTypes } from "react";

MessageBody.propTypes = {
  wrapper: PropTypes.bool
}

function MessageBody(props) {
  let classes = ["message-body-wrapper"];
  if (!props.wrapper) {
    classes.push("message-body", "devtools-monospace");
  }

  // @TODO Handle this._link and this._linkCallback
  const link = "";
  // @TODO Handle this.stack
  const stack = "";

  return (
    <span className={classes}>
      <span>
        {link}
        {props.children}
        {stack}
      </span>
    </span>
  );
}

export default MessageBody;
