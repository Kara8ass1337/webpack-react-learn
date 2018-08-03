import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Clock from './components/clock';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Clock />
      </div>
    );
  }
}

export default hot(module)(App);
