import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Clock from './components/clock/clock';
import JustText from './components/justText/justText';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      justTextColor: 'red',
    };

    this.updateData = ::this.updateData;
  }

  updateData(value) {
    this.setState({
      justTextColor: value,
    });
  }

  render() {
    const { justTextColor } = this.state;

    return (
      <div>
        <Clock updateData={this.updateData} />
        <JustText color={justTextColor} />
      </div>
    );
  }
}

export default hot(module)(App);
