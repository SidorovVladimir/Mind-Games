import getRandomNumber from '../utils.js';

import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 0;
const maxNumber = 60;

const getPrime = (num) => {
  if (num <= 1) {
    return false;
  } if (num === 2) {
    return true;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randomNumber = getRandomNumber(minNumber, maxNumber);
  const isPrime = getPrime(randomNumber) ? 'yes' : 'no';

  return [randomNumber, isPrime];
};

const startPrime = () => {
  startGame(description, generateRound);
};
export default startPrime;
