module.exports = {
  rules: {
    quotes: [2, 'single'],
    'import/no-extraneous-dependencies': 0,
    'global-require': 0,
    semi: [2, 'never'],
    'comma-dangle': [2, 'always-multiline'],
    'object-curly-newline': [2, {
      multiline: true,
      minProperties: 3,
    }],
    'array-bracket-spacing': [2, 'never'],
    'object-curly-spacing': [2, 'always'],
  },
};
