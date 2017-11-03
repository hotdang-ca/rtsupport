import React from 'react';
import PropTypes from 'prop-types';

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit(e) {
    e.preventDefault();
    const node = this.channelInput;
    const channelName = node.value;

    this.props.addChannel(channelName);
    node.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input
          type="text"
          ref={(input) => { this.channelInput = input; }}
        />
      </form>
    );
  }
}

ChannelForm.propTypes = {
  addChannel: PropTypes.func.isRequired,
};

export default ChannelForm;
