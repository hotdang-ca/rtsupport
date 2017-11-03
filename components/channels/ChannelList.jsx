import React from 'react';
import PropTypes from 'prop-types';

import Channel from './Channel.jsx';

class ChannelList extends React.Component {
  render() {
    const { channels, setChannel } = this.props;

    return (
      <div>
        <h2>Channels</h2>
        <ul>
          {
            channels.map(channel => (
              <Channel
                channel={channel}
                setChannel={setChannel}
                key={channel.id}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired,
};

export default ChannelList;

