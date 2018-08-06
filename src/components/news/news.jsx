import React, { Component } from 'react';

export default class News extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { news } = this.props;

    const newsTemplate = news.map((item, index) => {
      const key = `news-${index}`;

      return (
        <div key={key}>
          <p className="news__author">
            {item.author}
            :
          </p>
          <p className="news__text">
            {item.text}
          </p>
        </div>
      );
    });

    return (
      <div className="news">
        {newsTemplate}
      </div>
    );
  }
}
