module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    semi: [2, 'always'],
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/prop-types': 0,
    'no-unused-vars': 'warn',
  },
};
