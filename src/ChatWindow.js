import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserConversation from './UserConversation';
import UserSend from './UserSend';

class ChatWindow extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
    onSendMessage: PropTypes.func.isRequired
  }

  render () {
    const { user, messages, onSendMessage } = this.props;

    return (
		<div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>

			<UserConversation user={user} messages={messages}/>

			<UserSend onSendMessage={onSendMessage} username={user.username} />
            
          </div>      
    );
  }
  
}

export default ChatWindow;