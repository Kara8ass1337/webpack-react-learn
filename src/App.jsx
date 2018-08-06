import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Clock from './components/clock/clock';
import PassDataBtwComponentsLearn from './components/PassDataBtwComponentsLearn/PassDataBtwComponentsLearn';
import { getRandomColor } from './helpers/helpers';
import News from './components/news/news';

const myNews = [
  {
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...',
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!',
  },
  {
    author: 'Max Frontend',
    text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35',
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru',
  },
];

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
        <PassDataBtwComponentsLearn color={justTextColor} />
        <News news={myNews} />
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
