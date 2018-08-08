import React from 'react';
import style from './add.scss';

export default class Add extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      agree: false,
    };

    this.input = React.createRef();
    this.textarea = React.createRef();
    this.handleClick = ::this.handleClick;
    this.handleCheck = ::this.handleCheck;
  }

  componentDidMount() {

  }

  handleClick() {
    const result = `
    Автор: ${this.input.current.value}
    Текст новости: ${this.textarea.value}`;

    alert(result);
  }

  handleCheck(e) {
    this.setState({
      agree: e.currentTarget.checked,
    });
  }

  render() {
    const { agree } = this.state;

    return (
      <div className={style.add}>
        <input className={style.author} defaultValue="" placeholder="Автор" ref={this.input} />
        <textarea className={style.text} defaultValue="" placeholder="Текст новости" ref={this.textarea} />
        <label className={style.checkrule}>
          <input type="checkbox" onChange={this.handleCheck} />
          Я согласен с правилами
        </label>
        <button type="button" className={style.btn} disabled={!agree} onClick={this.handleClick}>
          Добавить новость
        </button>
      </div>
    );
  }
}
