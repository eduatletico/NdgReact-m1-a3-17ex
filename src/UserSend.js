import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserSend extends Component {
  static propTypes = {
    onSendMessage: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  }

  state = {
    username: this.props.username,
    text: ''
  }

  handleSend = (event) => {
    this.setState({ text: event.target.value });
  };

  isDisabled = () => {
    return this.state.text === '';
  };

  sendMessage = (event) => {
    event.preventDefault();
    this.props.onSendMessage(this.state);
    this.setState({ 
      username: '',
      text: ''
    });
  };


  render () {
    return (
      <div>
        <form className="input-group" onSubmit={this.sendMessage}>
          <input type="text" className="form-control" placeholder="Enter your message..." value={this.state.text} onChange={this.handleSend} />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
  
}

export default UserSend;