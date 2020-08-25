module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
		'es6': true,
	},
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:promise/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'promise',
    'prettier'
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion:  2020,
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
    'no-duplicate-imports': 'error',
    'array-bracket-newline': 'error',
    'array-bracket-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': 'error',
    'camelcase': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'eol-last': 'error',
    'implicit-arrow-linebreak': 'error',
    'keyword-spacing': 'error',
    'line-comment-position': 'error',
    'max-len': ['error', { 'code': 100 }],
    'max-lines': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'no-negated-condition': 'error',
    'no-trailing-spaces': 'error',
    'spaced-comment': 'error',
    'semi-spacing': 'error',
    'semi-style': 'error',

    // typescript-eslint
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
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
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'enum',
        'format': ['PascalCase'],
        'prefix': ['E']
      },
      {
        'selector': 'interface',
        'format': ['PascalCase'],
        'prefix': ['I']
      },
      {
        'selector': 'typeAlias',
        'format': ['PascalCase'],
        'prefix': ['T']
      }
    ],

    // typescript-eslint extension rules
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': 'error',
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'error',
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
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