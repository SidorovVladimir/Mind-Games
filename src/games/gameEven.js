import getRandomNumber from '../randomNumber.js';
import gameLogic from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 0;
const maxNumber = 50;
const logicGameEven = () => {
  const randomNumber = getRandomNumber(minNumber, maxNumber);
  const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [randomNumber, isEven];
};

const startEvenGame = () => {
  gameLogic(description, logicGameEven);
};
export default startEvenGame;
