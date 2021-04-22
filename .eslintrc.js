module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },

  env: {
    browser: true
  },

  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // '@vue/standard'
    // 'plugin:vue/vue3-recommended'
    'plugin:vue/recommended'
  ],

  // required to lint *.vue files
  plugins: ['vue'],

  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    process: true,
    Capacitor: true,
    chrome: true
  },

  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    'template-curly-spacing': 'off',
    // allow paren-less arrow functions
    'no-unneeded-ternary': 'off',
    'no-useless-escape': 'off',
    'arrow-parens': 'off',
    'one-var': 'off',
    indent: 'off',
    'no-unused-vars': 'off',
    'no-redeclare': 'off',
    'handle-callback-err': 'off',
    'import/first': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/export': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-errors': 'off',
    'space-before-function-paren': 'off',
    'comma-dangle': 'error',
    'no-trailing-spaces': 'error',
    'no-mixed-operators': 'off',
    'no-extend-native': 'off',
    'vue/require-prop-type-constructor': 'off',
    'vue/valid-v-bind': 'off',
    'vue/html-self-closing': 'off',
    'vue/html-indent': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attributes-order': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-quotes': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/no-v-html': 'off',
    'vue/mustache-interpolation-spacing': 'off',
    semi: 'off',
    // allow console.log during development only
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};
