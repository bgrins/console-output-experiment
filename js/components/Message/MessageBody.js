import React, { PropTypes } from "react";
import MessageTimestamp from "./MessageTimestamp";
import MessageIcon from "./MessageIcon";

MessageBody.propTypes = {
  indent: PropTypes.string,
  prefix: PropTypes.string,
  category: PropTypes.string,
  severity: PropTypes.string,
  timeStamp: PropTypes.array,
}

function MessageBody(props) {

  // @TODO This is needed for 'input' messages (jsterm input echoed back into output)
  // if (props.category == "input") {
  //   attributes.ariaLive = "off";
  // }

  const { indent, prefix, category, severity, timeStamp } = props.message;

  return (
    <div className="message" data-category={category} data-severity={severity}>
      <MessageTimestamp timestamp={timeStamp} />
      <MessageIcon severity={severity} />
      {prefix}
      <span className="message-body-wrapper message-body devtools-monospace">
        <span>
          <span className={props.isFlexed ? "message-flex-body" : ""}>
            <span className="message-body devtools-monospace">
              {props.children}
            </span>
          </span>
        </span>
      </span>
    </div>
  );
}

export default MessageBody;
