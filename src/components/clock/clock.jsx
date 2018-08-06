import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { alwaysTwoDigits } from 'helpers/helpers';
import style from './clock.scss';
import { getRandomColor } from '../../helpers/helpers';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      h1Style: {
        color: 'black',
        textTransform: 'uppercase',
      },
      btnStyle: {
        transform: 'scaleX(1)',
      },
    };

    this.handleMouseHover = ::this.handleMouseHover; // :: is instead of .bind(this);
    this.handleClick = ::this.handleClick; // :: is instead of .bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getDate() {
    const { date } = this.state;

    return date.toLocaleDateString();
  }

  getTime() {
    const { date } = this.state;
    const hours = alwaysTwoDigits(date.getHours());
    const minutes = alwaysTwoDigits(date.getMinutes());
    const seconds = alwaysTwoDigits(date.getSeconds());

    return `${hours}:${minutes}:${seconds}`;
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  changeColor() {
    const { h1Style } = this.state;
    const nextColor = h1Style.color === 'black' ? 'red' : 'black';

    this.setState({
      h1Style: {
        ...h1Style,
        color: nextColor,
      },
    });
  }

  handleMouseHover() {
    this.changeColor();
  }

  handleClick() {
    const { btnStyle } = this.state;
    const { updateData } = this.props;
    const nextTransform = btnStyle.transform === 'scaleX(-1)' ? 'scaleX(1)' : 'scaleX(-1)';

    this.setState({
      btnStyle: {
        ...btnStyle,
        transform: nextTransform,
      },
    });

    updateData(getRandomColor());
  }

  render() {
    const { h1Style, btnStyle } = this.state;

    return (
      <div className={style.clock}>
        <h1
          style={h1Style}
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}>
          Date now is
        </h1>
        <div>
          {this.getTime()}
        </div>
        <div>
          {this.getDate()}
        </div>
        <Button bsStyle="success" style={btnStyle} onClick={this.handleClick}>
          Touch me
        </Button>
      </div>
    );
  }
}

Clock.propTypes = {
  updateData: PropTypes.func,
};
