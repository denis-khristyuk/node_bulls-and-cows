module.exports = {
  extends: '@mate-academy/eslint-config',
  "parserOptions": {
    "sourceType": "module",
  },
  env: {
    jest: true
  },
  rules: {
    'no-proto': 0
  },
  plugins: ['jest']
};
