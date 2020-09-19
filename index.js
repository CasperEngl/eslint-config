module.exports = {
  extends: [
    'airbnb-base',
  ],
  rules: {
    quotes: [2, 'single'],
    semi: [2, 'never'],
    'import/no-extraneous-dependencies': 0,
    'global-require': 0,
    'comma-dangle': [2, 'always-multiline'],
    'array-bracket-spacing': [2, 'never'],
    'object-curly-spacing': [2, 'always'],
    'object-curly-newline': [2, {
      ObjectExpression: 'always',
      ObjectPattern: {
        multiline: true,
        consistent: true,
        minProperties: 3,
      },
    }],
    'object-property-newline': ['error', {
      allowMultiplePropertiesPerLine: false,
    }],
    'brace-style': [2, '1tbs'],
    'no-empty-pattern': 'error',
    'max-len': ['error', {
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreRegExpLiterals: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true,
    }],
    'no-trailing-spaces': 2,
    indent: [2, 2],
  },
}
