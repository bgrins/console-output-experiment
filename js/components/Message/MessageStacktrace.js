import React, { PropTypes } from "react";

MessageStacktrace.propTypes = {
  stacktrace: PropTypes.array.isRequired
}

function MessageStacktrace(props) {
  // @TODO need to make the stacktrace collapsible

  if (!props.stacktrace) {
    return (<div />);
  }

  let pieces = props.stacktrace.map(function(trace, i) {
    // Stacktraces don't ever change order so we can use the index
    // as a unique ID to prevent the warning: https://fb.me/react-warning-keys
    return (
      <li key={i}>
        <span className="function">
          <span className="cm-variable">{trace.functionName}</span>()
        </span>
        <a href={trace.filename}
           draggable="false"
           title={trace.filename}
           className="message-location theme-link">
          <span className="filename">{trace.filename}</span>
          <span className="line-number">{trace.lineNumber}:{trace.columnNumber}</span>
        </a>
      </li>
    );
  });

  // @TODO: Implement the twisty opening
  return (
    <ul className="stacktrace devtools-monospace" data-open="true">
      {pieces}
    </ul>
  );
}

export default MessageStacktrace;
