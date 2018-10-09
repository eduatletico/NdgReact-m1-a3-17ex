import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserConversation extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired
  }

  render () {
    const { user, messages } = this.props;
    
    return (
      <ul className="message-list">
        {messages.map((message, index) => (
          <li
            key={index}
            className={
              message.username === user.username ? 'message sender' : 'message recipient'
            }
          >
            <p>{`${message.username}: ${message.text}`}</p>
         </li>
        ))}
      </ul>
    );
  }
  
}

export default UserConversation;