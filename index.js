module.exports = {
  "extends": [
    "@allbin/eslint-config",
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
