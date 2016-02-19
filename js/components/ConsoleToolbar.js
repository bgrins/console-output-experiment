import React, { Component } from 'react';
import { messageClear } from '../actions/AppActions';
import { connect } from 'react-redux';

class ConsoleToolbar extends Component {
  render() {
    let clear = () => {
      console.log("CLEAR");
      this.props.dispatch(messageClear());
    };
    let severityFilter = () => {
      // @TODO Add severity filtering
    };
    let search = () => {
      // @TODO Implement search feature
    };


    return (
      <div className="console-toolbar">
        <div className="console-toolbar-start">
          <button onClick={clear}>Clear</button>
          <button onClick={severityFilter}>All</button>
          <button onClick={severityFilter}>Errors</button>
          <button onClick={severityFilter}>Warnings</button>
          <button onClick={severityFilter}>Info</button>
          <button onClick={severityFilter}>Log</button>
        </div>
        <div className="console-toolbar-end">
          <input onInput={search} placeholder="Search (TODO)" /> &nbsp;
          <a href="https://github.com/bgrins/console-output-experiment/">repo</a>
        </div>
      </div>

    );
  }
}

// Wrap the component to inject dispatch and state into it
export default connect()(ConsoleToolbar);
