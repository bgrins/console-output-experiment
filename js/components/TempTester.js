import React, { Component } from "react";
import { messageAdd } from '../actions/AppActions';
import { connect } from 'react-redux';
import consoleGeneric from "../../test/data/console-output/ConsoleGeneric";

class TempTester extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.outputConsoleGeneric}>ConsoleGeneric</button>
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
    outputConsoleGeneric: () => {
      dispatch(messageAdd(consoleGeneric));
    }
  };
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(TempTester);
