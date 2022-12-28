import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 0;
const maxNumber = 50;

const generateRound = () => {
  const randomNumber = getRandomNumber(minNumber, maxNumber);
  const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';

  return [randomNumber, isEven];
};

const startEven = () => {
  startGame(description, generateRound);
};
export default startEven;
