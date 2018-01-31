 // react libraries
import React, { Component } from 'react';

// third-party libraries
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// components
import Message from './Message';

/**
 * @class MessagesList
 */
class MessagesList extends Component {
  render() {
    const { messages } = this.props;

    return (
      <section>
        <ul>
          {
            messages.map(message => (
                <Message
                  key={message.id}
                  {...message}
                />)
            )
          }
        </ul>
      </section>
    );
  }
}

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = state => ({ messages: state.messages });

export default connect(mapStateToProps, null)(MessagesList);
