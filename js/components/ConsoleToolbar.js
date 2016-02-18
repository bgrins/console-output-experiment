import React, { Component } from 'react';
import { messageClear } from '../actions/AppActions';
import { connect } from 'react-redux';

class ConsoleToolbar extends Component {
  render() {
    return (
      <button onClick={this.clear.bind(this)}>Clear</button>
    );
  }

  clear() {
    this.props.dispatch(messageClear());
  }
}

// Wrap the component to inject dispatch and state into it
export default connect()(ConsoleToolbar);
