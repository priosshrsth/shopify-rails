module.exports = {
  root: true,

  env: {
    node: true,
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-unused-vars': 'warn',
    'vue/require-v-for-key': 'warn',
    'vue/html-indent': 'error',
    'vue/html-quotes': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
  },

  plugins: ['prettier'],

  extends: [
    'plugin:vue/essential',
    'prettier/vue',
    'prettier',
  ],

  parserOptions: {
    parser: 'babel-eslint',
  },

  eslintIgnore: ['node_modules']
};
