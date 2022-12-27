/* eslint-disable no-console */
const checkDigits = (digits, guessDigits) => {
  const result = [];

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === guessDigits[i]) {
      result.push('Bull');
    } else if (guessDigits.includes(digits[i])) {
      result.push('Cow');
    } else if (digits[i] !== guessDigits[i]) {
      result.push('nope');
    }
  }

  console.log('\nResult: ' + result.join(', '));

  return result;
};

module.exports = { checkDigits };
