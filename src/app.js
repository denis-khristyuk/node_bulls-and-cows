/* eslint-disable no-console */
// import readline from 'readline';
// import { checkDigits } from './checkDigits.js';
// import { generateDigits } from './digitsGenerator.js';

const readline = require('readline');
const { checkDigits } = require('./checkDigits.js');
const { generateDigits } = require('./digitsGenerator.js');

const conditionToWin = ['Bull', 'Bull', 'Bull', 'Bull'];
const digitsToGuess = generateDigits();
const compareDigits = (a, b) => (
  JSON.stringify(a) === JSON.stringify(b)
);

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const outputMessage = () => {
  const message = `\nInput 4 digits (from 1 to 10)\n`;

  terminal.question(message, (digits) => {
    if (digits.length !== 4) {
      console.log('No! I said only FOUR digits.');
      outputMessage();
    } else
    if (compareDigits(conditionToWin, checkDigits(digits, digitsToGuess))) {
      console.log('Congrats! You won!');
      terminal.close();
    } else {
      outputMessage();
    }
  });
};

outputMessage();

module.exports = { outputMessage };
