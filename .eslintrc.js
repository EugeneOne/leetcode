module.exports = {
    root: true,
    env: {
      browser: true,
    },
    parserOptions: {
      parser: 'babel-eslint',
    },
    extends: ['standard'],
    rules: {
      // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'import/no-unresolved': 'off',
      'no-use-before-define': 'off',
      'no-param-reassign': 'off',
      'no-restricted-globals': 'off',
    },
  };
  