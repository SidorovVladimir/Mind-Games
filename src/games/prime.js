import getRandomNumber from '../utils.js';

import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 0;
const maxNumber = 60;

const isPrime = (number) => {
  if (number > 1) {
    for (let i = 2; i <= Math.sqrt(number); i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
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
