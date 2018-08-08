import React from 'react';
import PropTypes from 'prop-types';
import style from './add.scss';

export default class Add extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      text: '',
      agree: false,
    };

    this.handleClick = ::this.handleClick;
    this.handleCheck = ::this.handleCheck;
    this.handleChange = ::this.handleChange;
    this.validate = ::this.validate;
  }

  componentDidMount() {

  }

  handleClick() {
    const { author, text } = this.state;
    const { onAddNews } = this.props;

    onAddNews({ author, text });
  }

  handleCheck(e) {
    this.setState({
      agree: e.currentTarget.checked,
    });
  }

  handleChange(e) {
    const { id, value } = e.currentTarget;

    this.setState({
      [id]: value,
    });
  }

  validate() {
    const { author, text, agree } = this.state;

    return author.trim().length > 0 && text.trim().length > 0 && agree === true;
  }

  render() {
    const { author, text } = this.state;

    return (
      <form className={style.add}>
        <input
          id="author"
          className={style.author}
          value={author}
          placeholder="Автор"
          onChange={this.handleChange} />
        <textarea
          id="text"
          className={style.text}
          value={text}
          placeholder="Текст новости"
          onChange={this.handleChange} />
        <label className={style.checkrule}>
          <input type="checkbox" onChange={this.handleCheck} />
          Я согласен с правилами
        </label>
        <button type="button" className={style.btn} disabled={!this.validate()} onClick={this.handleClick}>
          Добавить новость
        </button>
      </form>
    );
  }
}

Add.propTypes = {
  onAddNews: PropTypes.func.isRequired,
};
