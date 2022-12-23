import getRandomNumber from '../randomNumber.js';

import gameLogic from '../index.js';

const description = 'What number is missing in the progression?';

const minStep = 1;
const maxStep = 5;
const minStartNumber = 0;
const maxStartNumber = 50;
const minLengthProgress = 5;
const maxLengthProgress = 10;
const getProgression = (a, b, c) => {
  const arr = [];
  for (let i = a; arr.length < b; i += c) {
    arr.push(i);
  }
  return arr;
};

const logicGameProgression = () => {
  const stepArr = getRandomNumber(minStep, maxStep);
  const startNumber = getRandomNumber(minStartNumber, maxStartNumber);
  const lengthProgress = getRandomNumber(minLengthProgress, maxLengthProgress);
  const progression = getProgression(startNumber, lengthProgress, stepArr);
  const indexProgression = Math.floor(Math.random() * progression.length);
  const answer = String(progression[indexProgression]);
  progression[indexProgression] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const startProgressionGame = () => {
  gameLogic(description, logicGameProgression);
};
export default startProgressionGame;
