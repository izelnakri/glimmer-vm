module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'callback-return': 'error',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'off',
    complexity: 'off',
    'consistent-return': 'error',
    'consistent-this': 'error',
    'default-case': 'error',
    'dot-notation': [
      'error',
      {
        allowKeywords: true,
      },
    ],
    eqeqeq: 'error',
    'func-name-matching': 'error',
    'func-names': 'off',
    'func-style': ['error', 'declaration'],
    'global-require': 'off',
    'guard-for-in': 'error',
    'handle-callback-err': 'error',
    'id-blacklist': 'error',
    'id-length': 'off',
    'id-match': 'error',
    'init-declarations': 'off',
    'line-comment-position': 'error',
    'lines-around-directive': 'error',
    'max-depth': 'off',
    'max-lines': 'off',
    'max-nested-callbacks': 'error',
    'max-params': 'off',
    'new-cap': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'no-alert': 'error',
    'no-await-in-loop': 'off',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-catch-shadow': 'error',
    'no-console': 'off',
    'no-continue': 'error',
    'no-div-regex': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-inline-comments': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-mixed-requires': 'error',
    'no-multi-assign': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-negated-condition': 'error',
    'no-negated-in-lhs': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-path-concat': 'off',
    'no-plusplus': 'off',
    'no-process-env': 'off',
    'no-process-exit': 'error',
    'no-proto': 'error',
    'no-restricted-globals': 'error',
    'no-restricted-imports': 'error',
    'no-restricted-modules': 'error',
    'no-restricted-properties': 'error',
    'no-restricted-syntax': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-sync': 'off',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'off',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-use-before-define': 'off',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'off',
    'no-void': 'error',
    'no-warning-comments': 'error',
    'object-shorthand': 'error',
    'one-var': 'off',
    'operator-assignment': 'error',
    'prefer-const': 'off',
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: false,
      },
    ],
    'prefer-numeric-literals': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-reflect': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'off',
    radix: 'error',
    'require-await': 'error',
    'require-jsdoc': 'off',
    'sort-imports': 'error',
    'sort-keys': 'off',
    'sort-vars': 'error',
    'spaced-comment': ['error', 'always'],
    strict: 'off',
    'symbol-description': 'error',
    'valid-jsdoc': 'off',
    'vars-on-top': 'error',
    yoda: ['error', 'never'],

    // replace ESLint rules with TypeScript-compatible rules
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'error',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'testem-browserstack.js',
        'bin/**/*.js',
        'build/**/*.js',
        'server/**/*.js',
      ],
      env: {
        es6: true,
        node: true,
      },
    },
    // bin scripts
    {
      files: ['bin/**/*.js'],
      rules: {
        'no-process-exit': 'off',
      },
    },
    // source packages
    {
      files: ['packages/**/*.js'],
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
};
