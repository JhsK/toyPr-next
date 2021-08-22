// .eslintrc.js
module.exports = {
  root: true,
  //quotes: [0, "double"],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint', 'import', 'react-hooks'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
    'react/prop-types': 0,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', 'tsx'],
      },
    },
  },
};
