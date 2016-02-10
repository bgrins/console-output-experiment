import React, { PropTypes } from "react";

MessageIcon.propTypes = {
  severity: PropTypes.string.isRequired
}

function MessageIcon(props) {
  // @TODO where does severity come from?
  // @TODO const title = l10n.getStr("severity." + this._severityNameCompat);
  const title = props.severity + ".";

  // @TODO if this.stack is true, then the icon is a collapsible handler?
  return (
    <span className="icon">
    </span>
  );
}

export default MessageIcon;
