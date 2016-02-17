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
    outputMessages: (event) => {
      let {messagetype, objecttype, nummessages} = event.target.dataset;
      if (!nummessages) {
        nummessages = 1;
      }

      let packet = objecttype ? data[messagetype][objecttype] : data[messagetype];
      for (var i = 0; i < nummessages; i++) {
        let message = prepareMessageInput(messagetype, packet);
        dispatch(messageAdd(message));
      }
    },
  };
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(TempTester);
