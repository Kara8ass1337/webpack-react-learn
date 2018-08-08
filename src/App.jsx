import React from 'react';
import { hot } from 'react-hot-loader';
import Clock from './components/clock/clock';
import PassDataBtwComponentsLearn from './components/passDataBtwComponentsLearn/passDataBtwComponentsLearn';
import { getModifyArrayWithUniqueIds, getRandomColor } from './helpers/helpers';
import News from './components/news/news';
import Add from './components/add/add';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      passDataBtwComponentsLearnColor: getRandomColor(),
      news: null,
      isLoading: false,
    };

    this.updateData = ::this.updateData;
    this.handleAddNews = ::this.handleAddNews;
  }

  static getDerivedStateFromProps(props, state) {
    /**
     * для корректной работы метода
     * нужно возвращать новый state в правильном формате.
     * всё равно что если написать вместо return
     * this.setState({filteredNews: props.data})
     */
    return {
      filteredNews: props.data,
    };
  }

  componentDidMount() {
    this.toggleIsLoading(true);

    fetch('/news.json')
      .then((resp => resp.json()))
      .then((data) => {
        setTimeout(() => {
          this.setState({
            news: getModifyArrayWithUniqueIds(data),
          });

          this.toggleIsLoading(false);
        }, 3000);
      });
  }

  toggleIsLoading(boolean) {
    const { isLoading } = this.state;
    const state = typeof boolean === 'undefined' ? !isLoading : boolean;

    this.setState({
      isLoading: state,
    });
  }

  updateData(value) {
    this.setState({
      passDataBtwComponentsLearnColor: value,
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
    const { passDataBtwComponentsLearnColor, news, isLoading } = this.state;
    const loadingTemplate = (
      <p>
        Загружаю...
      </p>
    );

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
        {isLoading && loadingTemplate}
        {Array.isArray(news) && <News news={news} />}
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
