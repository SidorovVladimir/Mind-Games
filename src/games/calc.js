import getRandomNumber, { getRandomIndex } from '../utils.js';
import startGame from '../index.js';

const description = 'What is the result of the expression?';
const minNumber = 1;
const maxNumber = 10;
const operations = ['+', '-', '*'];

const calculate = (x, y, operator) => {
  let result;
  if (operator === '+') {
    result = x + y;
  } if (operator === '-') {
    result = x - y;
  } if (operator === '*') {
    result = x * y;
  }
  return result;
};

const generateRound = () => {
  const operator = operations[getRandomIndex(operations)];
  const Number1 = getRandomNumber(minNumber, maxNumber);
  const Number2 = getRandomNumber(minNumber, maxNumber);
  const question = `${Number1} ${operator} ${Number2}`;
  let answer = '';
  switch (operator) {
    case '+':
    case '-':
    case '*':
      answer = calculate(Number1, Number2, operator).toString();
      break;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
  return [question, answer];
};

const startCalc = () => {
  startGame(description, generateRound);
};
export default startCalc;
