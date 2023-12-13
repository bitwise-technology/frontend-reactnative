module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  extends: ['eslint-config-prettier'],
  plugins: ['@typescript-eslint', 'react', 'react-native', 'eslint-plugin-prettier'],
  env: {
    'react-native/react-native': true,
  },
  rules: {
    'no-console': 'off',
    quotes: [1, 'single', { avoidEscape: true }],
    'prettier/prettier': ['error', { singleQuote: true }],
    'max-len': ['error', { code: 240, ignoreUrls: true }],
    'react-hooks/exhaustive-deps': 'off',
    'react-native/no-inline-styles': 'off',
    'jsx-quotes': ['off', 'prefer-single'],
    'react/react-in-jsx-scope': 'off',
    'no-alert': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
};
