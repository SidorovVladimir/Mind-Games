import { getRandomNumber } from '../utils.js';

import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 0;
const maxNumber = 60;

const isPrime = (number) => {
  const limit = Math.sqrt(number);
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= limit; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
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
