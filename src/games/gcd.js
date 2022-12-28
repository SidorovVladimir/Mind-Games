import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const minNumber = 0;
const maxNumber = 50;

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

const generateRound = () => {
  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumber);
  const question = `${number1} ${number2}`;
  const gcd = String(getGcd(number1, number2));

  return [question, gcd];
};

const startGcd = () => {
  startGame(description, generateRound);
};
export default startGcd;
