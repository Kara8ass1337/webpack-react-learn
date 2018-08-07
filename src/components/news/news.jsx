import React from 'react';
import PropTypes from 'prop-types';
import styles from './news.scss';

export default class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { news } = this.props;

    let newsTemplate;

    if (news.length > 0) {
      newsTemplate = news.map(item => (
        <div key={item.id}>
          <p className="news__author">
            {item.author}
            :
          </p>
          <p className="news__text">
            {item.text}
          </p>
        </div>
      ));
    } else {
      newsTemplate = (
        <p>
          К сожалению, новостей нет
        </p>
      );
    }

    const newsCounter = (
      <b>
        Всего новостей:
        {` ${news.length}`}
      </b>
    );

    return (
      <div className={styles.news}>
        {newsTemplate}

        {news.length > 0 ? newsCounter : null}
      </div>
    );
  }
}

News.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
};

News.defaultProps = {
  news: [],
};
