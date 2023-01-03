import { getRandomNumber, getRandomIndex } from '../utils.js';

import startGame from '../index.js';

const description = 'What number is missing in the progression?';
const minStep = 1;
const maxStep = 5;
const minStart = 0;
const maxStart = 50;
const minLength = 5;
const maxLength = 10;

const getProgression = (start, length, step) => {
  const progression = [];
  for (let i = start; progression.length <= length; i += step) {
    progression.push(i);
  }
  return progression;
};

const generateRound = () => {
  const step = getRandomNumber(minStep, maxStep);
  const start = getRandomNumber(minStart, maxStart);
  const length = getRandomNumber(minLength, maxLength);
  const progression = getProgression(start, length, step);
  const indexProgression = getRandomIndex(progression);
  const expectedAnswer = String(progression[indexProgression]);
  progression[indexProgression] = '..';
  const question = progression.join(' ');

  return [question, expectedAnswer];
};

const startProgression = () => {
  startGame(description, generateRound);
};
export default startProgression;
