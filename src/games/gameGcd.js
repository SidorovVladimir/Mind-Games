import getRandomNumber from '../randomNumber.js';
import gameLogic from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const minNumber = 0;
const maxNumber = 50;

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};
const logicGameGcd = () => {
  const firstRandomNumber = getRandomNumber(minNumber, maxNumber);
  const secondRandomNumber = getRandomNumber(minNumber, maxNumber);
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const gcd = String(getGcd(firstRandomNumber, secondRandomNumber));
  return [question, gcd];
};

const startGcdGame = () => {
  gameLogic(description, logicGameGcd);
};
export default startGcdGame;
