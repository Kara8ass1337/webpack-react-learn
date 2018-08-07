import React from 'react';
import style from './add.scss';

export default class Add extends React.Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
    this.textarea = React.createRef();
    this.handleClick = ::this.handleClick;
  }

  componentDidMount() {

  }

  handleClick() {
    const val = this.input.current.value;

    alert(val);
  }

  render() {
    return (
      <div className={style.add}>
        <input className={style.author} defaultValue="" placeholder="Автор" ref={this.input} />
        <textarea className={style.text} defaultValue="" placeholder="Текст новости" ref={this.textarea} />
        <label className={style.checkrule}>
          <input type="checkbox" />
          Я согласен с правилами
        </label>
        <button type="button" className={style.btn} onClick={this.handleClick}>
          Добавить новость
        </button>
      </div>
    );
  }
}
