import React, { PropTypes } from "react";
import { messagesFilter } from '../actions/AppActions';
import { connect } from 'react-redux';

function FilterInfo(props) {
  let clearFilters = () => {
    props.dispatch(messagesFilter(""));
  };

  if (props.numHidden > 0) {
    return (
      <div>
        {props.numHidden} messages hidden by filters
        <button onClick={clearFilters}>Clear filters</button>
      </div>
    );
  }
  return (<div />);
}

// Wrap the component to inject dispatch and state into it
export default connect()(FilterInfo);
