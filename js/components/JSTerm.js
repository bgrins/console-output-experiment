import React, { Component } from 'react';
import { messageAdd } from '../actions/AppActions';
import { connect } from 'react-redux';

class JSTerm extends Component {
  constructor(props) {
		super(props);
		this.state = {
			name: "",
			message: ""
		};
	}

  render() {
    const dispatch = this.props.dispatch;
    let { message } = this.state;

    return (
      <div>Your message: <input type="text" value={message} onChange={(event) => {
					this.setState({
						message: event.target.value
					});
				}} onKeyDown={(event) => {
					if(event.key === "Enter") {
            this.props.onMessageAdd(event.target.value);
            this.setState({
              message: ""
            });
          }
				}} /></div>
    );
  }
}

// Wrap the component to inject dispatch and state into it
export default JSTerm;
