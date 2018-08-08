export function alwaysTwoDigits(number) {
  return number < 10 ? `0${number}` : number;
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function randomStr(length = 5) {
  let text = '';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  return text;
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

export function getArrayWithUniqueItems(length) {
  if (length === 0) return [];

  const arr = [];

  for (let i = 0; i <= length; i++) {
    arr[i] = randomStr();
  }

  return [...new Set(arr)];
}

export function getModifyArrayWithUniqueIds(arr = []) {
  if (arr.length === 0) return arr;

  const uniqueIds = getArrayWithUniqueItems(arr.length);

  return arr.map((item, index) => ({
    ...item,
    id: uniqueIds[index],
  }));
}
