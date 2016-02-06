import { messageAdd } from '../actions/AppActions';
import { connect } from 'react-redux';
import JSTerm from './JSTerm';

// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  return {
    data: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMessageAdd: (message) => {
      dispatch(messageAdd(message));
    }
  };
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(JSTerm);
