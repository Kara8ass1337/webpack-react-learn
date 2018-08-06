export function alwaysTwoDigits(number) {
  return number < 10 ? `0${number}` : number;
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomColor() {
  const colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'deepskyblue',
    'purple',
    'lime',
    'pink',
  ];

  return colors[randomInt(0, colors.length - 1)];
}
