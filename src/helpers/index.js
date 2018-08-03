export function alwaysTwoDigits(number) {
  return number < 10 ? `0${number}` : number;
}
