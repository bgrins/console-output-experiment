import React, { PropTypes } from "react";
import { messagesSearch } from '../actions/AppActions';
import { connect } from 'react-redux';

function FilterInfo(props) {
  let clearFilters = () => {
    props.dispatch(messagesSearch(""));
  };

  // @TODO implement 'clear filters' button
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
