import React, { Component } from "react";
import { messageAdd } from '../actions/AppActions';
import { connect } from 'react-redux';
import { prepareMessageInput } from "../utils/MessageDispatcherUtils";
import data from "../../test/data/mock-messages/index";

class TempTester extends Component {
  render() {
    return (
      <div>
        <button data-messagetype="ConsoleGeneric" onClick={this.props.outputMessage}>
          ConsoleGeneric
        </button>
        <button data-messagetype="JavaScriptEvalOutput" data-objecttype="Date" onClick={this.props.outputMessage}>
          Date
        </button>
      </div>
    );
  }
}

// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  return {
    data: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    outputMessage: (event) => {
      const {messagetype, objecttype} = event.target.dataset;
      let packet = objecttype ? data[messagetype][objecttype] : data[messagetype];
      let message = prepareMessageInput(messagetype, packet);
      dispatch(messageAdd(message));
    }
  };
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(TempTester);
