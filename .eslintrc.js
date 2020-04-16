const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
		'es6': true,
	},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'css-modules',
  ],
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        'spaced-comment': 'off'
      }
    },
    {
      files: ['packages/view/**/*'],
      env: {
        es6: true,
        browser: true
      }
    }
  ],
  parserOptions: {
    project: ["tsconfig.json"],
    sourceType: 'module',
  },
  rules: {
    // eslint
    'newline-before-return': 'error',
    'no-template-curly-in-string': 'error',
    'max-classes-per-file': 'error',
    'no-eval': 'error',
    'no-new-wrappers': 'error',
    'no-proto': 'error',
    'no-void': 'error',
    'radix': 'error',
    'arrow-body-style': 'error',
    'no-duplicate-imports': 'error',
    'array-bracket-newline': 'error',
    'array-bracket-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': 'error',
    'camelcase': 'error',
    'comma-dangle': 'error',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'implicit-arrow-linebreak': 'error',
    'keyword-spacing': 'error',
    'line-comment-position': 'error',
    'max-len': ['error', { 'code': 120 }],
    'max-lines': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'no-negated-condition': 'error',
    'no-trailing-spaces': 'error',
    'spaced-comment': 'error',
    'semi-spacing': 'error',
    'semi-style': 'error',

    // typescript-eslint
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/promise-function-async': 'error',

    // typescript-eslint extension rules
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': 'error',
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'error',
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2, { 'SwitchCase': 1 }],
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': 'error',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single', { 'avoidEscape': true }],
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always'
      }
    ],
  }
};