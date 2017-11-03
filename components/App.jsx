import React from 'react';
import ChannelSection from './channels/ChannelSection.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
    };
  }

  handleAddChannel(name) {
    let { channels } = this.state;

    channels.push({
      id: channels.length,
      name,
    });

    this.setState({
      channels,
    });
  }

  handleSetChannel(activeChannel) {
    this.setState({
      activeChannel,
    });

    // TODO: get channels messages
  }

  render() {
    return (
      <div>
        <div>
          <ChannelSection
            channels={this.state.channels}
            setChannel={this.handleSetChannel.bind(this)}
            addChannel={this.handleAddChannel.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
