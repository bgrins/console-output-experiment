import React, { Component } from 'react';
import { messageClear, messagesFilter, messagesSeverityFilter } from '../actions/AppActions';
import { connect } from 'react-redux';

class ConsoleToolbar extends Component {
  render() {
    let {filterSeverity, filterText} = this.props;
    let clear = () => {
      this.props.dispatch(messageClear());
    };
    let severityFilter = (e) => {
      let {severity} = e.target.dataset;
      this.props.dispatch(messagesFilter({ filterSeverity: severity }));
    };
    let search = (e) => {
      this.props.dispatch(messagesFilter({ filterText: e.target.value }));
    };

    return (
      <div className="console-toolbar">
        <div className="console-toolbar-start">
          <button onClick={clear}>Clear</button>
          <button className={!filterSeverity ? "active" : ""} onClick={severityFilter} data-severity="">All</button>
          <button className={filterSeverity === "error" ? "active" : ""} onClick={severityFilter} data-severity="error">Errors</button>
          <button className={filterSeverity === "warning" ? "active" : ""} onClick={severityFilter} data-severity="warning">Warnings</button>
          <button className={filterSeverity === "info" ? "active" : ""} onClick={severityFilter} data-severity="info">Info</button>
          <button className={filterSeverity === "log" ? "active" : ""} onClick={severityFilter} data-severity="log">Log</button>
        </div>
        <div className="console-toolbar-end">
          <input onInput={search} value={filterText} placeholder="Search" /> &nbsp;
          <a href="https://github.com/bgrins/console-output-experiment/">repo</a>
        </div>
      </div>
    );
  }
}

// Wrap the component to inject dispatch and state into it
export default connect()(ConsoleToolbar);
