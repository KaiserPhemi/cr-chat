// react libraries
import React, { Component } from 'react';

// third-party libraries
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// actions
import { addMessage } from '../actions';

/**
 * @class AddMessage
 * @return {any}
 */
class AddMessage extends Component {
  render() {
    let input;

    return (
      <section id="new-message">
        <input 
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              this.props.dispatch(input.value, 'Phemi')
              input.value = ''
            }
          }}
          type="text"
          ref={(node) => {
            input = node
          }}
        />
      </section>
    );
  }
}

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({ dispatch: (message, author) => dispatch(addMessage(message, author)) });

export default connect(null, mapDispatchToProps)(AddMessage);
