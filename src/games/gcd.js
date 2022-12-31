import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const minNumber = 0;
const maxNumber = 50;

const getGcd = (x, y) => (y === 0 ? x : getGcd(y, x % y));

const generateRound = () => {
  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumber);
  const question = `${number1} ${number2}`;
  const expectedAnswer = String(getGcd(number1, number2));

  return [question, expectedAnswer];
};

const startGcd = () => {
  startGame(description, generateRound);
};
export default startGcd;
