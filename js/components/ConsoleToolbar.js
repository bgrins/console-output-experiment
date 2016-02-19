import React, { Component } from 'react';
import { messageClear } from '../actions/AppActions';
import { connect } from 'react-redux';

class ConsoleToolbar extends Component {
  render() {
    let clear = () => {
      this.props.dispatch(messageClear());
    };

    return (
      <button onClick={clear}>Clear</button>
    );
  }
}

// Wrap the component to inject dispatch and state into it
export default connect()(ConsoleToolbar);
