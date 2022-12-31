import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 0;
const maxNumber = 50;

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(minNumber, maxNumber);
  const answer = isEven(number) ? 'yes' : 'no';
  const question = String(number);

  return [question, answer];
};

const startEven = () => {
  startGame(description, generateRound);
};
export default startEven;
