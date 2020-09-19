module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    '@putout/eslint-config',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'quotes': [2, 'single'],
    'semi': [2, 'never'],
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
    'putout/single-property-destructuring': 0,
    'putout/multiple-properties-destructuring': 2,
    'putout/align-spaces': 2,
    'putout/newline-function-call-arguments': 2,
    'putout/function-declaration-paren-newline': 2,
    'putout/remove-newline-after-default-import': 2,
    'no-trailing-spaces': 2,
    'indent': [2, 2],
  },
}
