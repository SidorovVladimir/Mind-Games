import getRandomNumber, { getRandomIndex } from '../utils.js';

import startGame from '../index.js';

const description = 'What number is missing in the progression?';
const minStepProgression = 1;
const maxStepProgression = 5;
const minStartNumberProgression = 0;
const maxStartNumberProgression = 50;
const minLengthProgression = 5;
const maxLengthProgression = 10;

const getProgression = (startNumber, length, step) => {
  const progression = [];
  for (let i = startNumber; progression.length <= length; i += step) {
    progression.push(i);
  }
  return progression;
};

const generateRound = () => {
  const stepProgression = getRandomNumber(minStepProgression, maxStepProgression);
  const startNumberProgression = getRandomNumber(
    minStartNumberProgression,
    maxStartNumberProgression,
  );
  const lengthProgression = getRandomNumber(minLengthProgression, maxLengthProgression);
  const progression = getProgression(startNumberProgression, lengthProgression, stepProgression);
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
