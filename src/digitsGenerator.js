const generateDigits = () => {
  let digits = '';

  do {
    digits += (Math.floor(Math.random() * 10) + 1);
  } while (digits.length !== 4);

  return digits;
};

module.exports = { generateDigits };
