module.exports = {
  env: {
    'browser': true
	},
  extends: [
    '../shared/.eslintrc.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:css-modules/recommended'
  ],
  plugins: [
    'react',
    'react-hooks',
    'css-modules'
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx:  true,
    },
  },
  rules: {
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-indent': ['error', 2],
    'react/prop-types': 'off',
    'react/no-access-state-in-setstate': 'error',
    'react/no-danger': 'error',
    'react/self-closing-comp': 'warn',
    'react/react-in-jsx-scope': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/no-will-update-set-state': 'error',
    'react/no-unused-state': 'error',
    'react/no-unsafe': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-string-refs': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/jsx-tag-spacing': 'warn',
    'react/jsx-props-no-multi-spaces': 'warn',
    'react/jsx-pascal-case': 'warn',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-bind': 'error',
    'react/jsx-fragments': 'warn',
    'react/jsx-equals-spacing': 'warn',
    'react/jsx-curly-spacing': 'warn',
    'react/jsx-closing-tag-location': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};