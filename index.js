module.exports = {
  "extends": [
    'plugin:react/recommended',
    "@allbin/eslint-config",
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
