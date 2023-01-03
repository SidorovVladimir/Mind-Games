import { getRandomNumber, getRandomIndex } from '../utils.js';
import startGame from '../index.js';

const description = 'What is the result of the expression?';
const minNumber = 1;
const maxNumber = 10;
const operations = ['+', '-', '*'];

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateRound = () => {
  const operator = operations[getRandomIndex(operations)];
  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumber);
  const question = `${number1} ${operator} ${number2}`;
  const expectedAnswer = String(calculate(number1, number2, operator));

  return [question, expectedAnswer];
};

const startCalc = () => {
  startGame(description, generateRound);
};
export default startCalc;
