// react libraries
import React, { Component } from 'react';

// third-party libraries
import PropTypes from 'prop-types';

/**
 * 
 */
class Message extends Component {
  render() {
    const { author, message } = this.props;
    
    return (
      <p>
        <i>{author}</i>: {message}
      </p>
    );
  }
}

Message.PropTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Message;
