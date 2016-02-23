import React, { Component } from "react";
import { messageAdd } from '../actions/AppActions';
import { connect } from 'react-redux';
import { prepareMessageInput } from "../utils/MessageDispatcherUtils";
import data from "../../test/data/mock-messages/index";

class TempTester extends Component {
  render() {
    return (
      <div>
        <button data-messagetype="ConsoleGeneric" onClick={this.props.outputMessages}>
          ConsoleGeneric
        </button>
        <button data-messagetype="ConsoleGeneric" data-nummessages="1000" onClick={this.props.outputMessages}>
          Bunch of ConsoleGenerics
        </button>
        <button data-messagetype="JavaScriptEvalOutput" data-objecttype="Date" onClick={this.props.outputMessages}>
          Simulate `new Date()` JS eval
        </button>
        <button data-messagetype="ConsoleService" onClick={this.props.outputMessages}>
          Simulate Console Service Message (Page Error)
        </button>
        <button onClick={this.props.outputMessageStream}>
          Simulate a bunch of messages
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

  function dispatchMessageFromRDP(packet) {
    let {type} = packet;
    if (type === "consoleAPICall") {
      let message = prepareMessageInput("ConsoleGeneric", packet);
      dispatch(messageAdd(message))
    }
    if (type === "pageError") {
      let message = prepareMessageInput("ConsoleService", packet);
      dispatch(messageAdd(message))
    }
    if (type === "evaluationResult") {
      let message = prepareMessageInput("JavaScriptEvalOutput", packet);
      dispatch(messageAdd(message))
    }
    if (type === "networkEvent") {
      // @TODO: Implement network event log
    }
    if (type === "networkEventUpdate") {
      // @TODO: Implement network event log
    }
  }

  return {
    outputMessageStream: () => {
      let messages = data.MessageStream();
      for (var i = 0; i < messages.length; i++) {
        dispatchMessageFromRDP(messages[i]);
      }
    },
    outputMessages: (event) => {
      let {messagetype, objecttype, nummessages} = event.target.dataset;
      if (!nummessages) {
        nummessages = 1;
      }

      let packet = objecttype ? data[messagetype][objecttype] : data[messagetype];
      for (var i = 0; i < nummessages; i++) {
        dispatchMessageFromRDP(packet);
      }
    },
  };
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(TempTester);
