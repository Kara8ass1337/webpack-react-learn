import React from 'react';
import { hot } from 'react-hot-loader';
import Clock from './components/clock/clock';
import PassDataBtwComponentsLearn from './components/passDataBtwComponentsLearn/passDataBtwComponentsLearn';
import { getModifyArrayWithUniqueIds, getRandomColor } from './helpers/helpers';
import News from './components/news/news';
import Add from './components/add/add';

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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      passDataBtwComponentsLearnColor: getRandomColor(),
      news: getModifyArrayWithUniqueIds(myNews),
    };

    this.updateData = ::this.updateData;
    this.handleAddNews = ::this.handleAddNews;
  }

  updateData(value) {
    this.setState({
      passDataBtwComponentsLearnColor: value,
    }, () => {
      // callback когда новое состояние установилось
    });
  }

  handleAddNews(data) {
    const { news } = this.state;

    const nextNews = getModifyArrayWithUniqueIds([data, ...news]);

    this.setState({
      news: nextNews,
    });
  }

  render() {
    const { passDataBtwComponentsLearnColor, news } = this.state;

    /**
     * тэг React.Fragment нужен для того,
     * чтобы не выводить обёртку из div.
     * выведится то, что находится
     * внутри него, без него самого
     */
    return (
      <React.Fragment>
        <Clock updateData={this.updateData} />
        <PassDataBtwComponentsLearn color={passDataBtwComponentsLearnColor} />
        <Add onAddNews={this.handleAddNews} />
        <News news={news} />
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
