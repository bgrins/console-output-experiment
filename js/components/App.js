/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import TempTester from './TempTester';
import ConsoleOutput from './ConsoleOutput';
import ConsoleToolbar from './ConsoleToolbar';
import JSTerm from './JSTermContainer';

class App extends Component {
  render() {
    const dispatch = this.props.dispatch;
    return (
      <div className="hud-console-wrapper">
        <div className="header-wrapper">
          <ConsoleToolbar />
        </div>
        <ConsoleOutput messages={this.props.data.messages} />
        <div className="jsterm-wrapper">
          <TempTester />
          <JSTerm />
        </div>
      </div>
    );
  }
}

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
