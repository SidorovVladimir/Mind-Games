import getRandomNumber from '../randomNumber.js';
import gameLogic from '../index.js';

const description = 'What is the result of the expression?';
const minNumber = 1;
const maxNumber = 10;

const logicGameCalc = () => {
  const operations = ['+', '-', '*'];
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];
  const firstRandomNumber = getRandomNumber(minNumber, maxNumber);
  const secondRandomNumber = getRandomNumber(minNumber, maxNumber);
  const question = `${firstRandomNumber} ${randomOperation} ${secondRandomNumber}`;
  let answer = '';
  switch (randomOperation) {
    case '+':
      answer = (firstRandomNumber + secondRandomNumber).toString();
      break;
    case '-':
      answer = (firstRandomNumber - secondRandomNumber).toString();
      break;
    case '*':
      answer = (firstRandomNumber * secondRandomNumber).toString();
      break;
    default:
  }
  return [question, answer];
};
const startCalcGame = () => {
  gameLogic(description, logicGameCalc);
};
export default startCalcGame;
