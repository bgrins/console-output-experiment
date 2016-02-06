/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConsoleOutput from './ConsoleOutput';
import JSTerm from './JSTermContainer';

class App extends Component {
  render() {
    const dispatch = this.props.dispatch;
    return (
      <div className="wrapper">
        <ConsoleOutput messages={this.props.data.messages} />
        <JSTerm />
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
