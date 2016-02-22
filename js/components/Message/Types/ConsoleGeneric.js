import React, { Component, PropTypes } from "react";
import MessageBody from "../MessageBody";
import MessageRepeat from "../MessageRepeat";
import MessageLocation from "../MessageLocation";
import BodyPieces from "../BodyPieces";

class ConsoleGeneric extends Component {
  shouldComponentUpdate(nextProps) {
    // Only re-render if the UI is going to change.
    return this.props.message.repeats !== nextProps.message.repeats;
  }

  render() {
    let props = this.props;

    // @TODO actually handle repeat and location (and add prop definitions)
    let repeat = props.message.repeats ? <MessageRepeat repeats={props.message.repeats} /> : "";
    let location = props.message.location ? <MessageLocation target="jsdebugger" /> : "";

    return (
      <MessageBody message={props.message} isFlexed>
        <BodyPieces pieces={props.message.arguments} />
        Test change
        {repeat}
        {location}
      </MessageBody>
    );
  }
}

ConsoleGeneric.propTypes = {
  message: PropTypes.shape({
    arguments: PropTypes.array.isRequired,
    category: PropTypes.string.isRequired,
    timeStamp: PropTypes.number.isRequired,
  }).isRequired,
}

export default ConsoleGeneric;
