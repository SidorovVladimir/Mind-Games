import getRandomNumber from '../utils.js';

import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 0;
const maxNumber = 60;

const isPrime = (number) => {
  for (let i = 2, max = Math.sqrt(number); i <= max; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const generateRound = () => {
  const number = getRandomNumber(minNumber, maxNumber);
  const expectedAnswer = isPrime(number) ? 'yes' : 'no';
  const question = String(number);

  return [question, expectedAnswer];
};

const startPrime = () => {
  startGame(description, generateRound);
};
export default startPrime;
