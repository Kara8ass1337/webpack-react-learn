import React from 'react';
import style from './testInput.scss';

export default class TestInput extends React.Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
    this.handleClick = ::this.handleClick;
  }

  handleClick() {
    const val = this.input.current.value;

    alert(val);
  }

  render() {
    return (
      <div className={style.testInput}>
        <input defaultValue="" placeholder="Введите значение" ref={this.input} />
        <button type="button" onClick={this.handleClick}>
          Показать значение input
        </button>
      </div>
    );
  }
}
