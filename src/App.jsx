import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Clock from './components/clock/clock';
import JustText from './components/justText/justText';
import {getRandomColor} from './helpers/helpers';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      justTextColor: getRandomColor(),
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

    /**
     * тэг React.Fragment нужен для того,
     * чтобы не выводить обёртку из div.
     * выведится то, что находится
     * внутри него, без него самого
     */
    return (
      <React.Fragment>
        <Clock updateData={this.updateData} />
        <JustText color={justTextColor} />
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
