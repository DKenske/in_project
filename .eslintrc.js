module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 'prettier',
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'import'],
  rules: {
    'no-unused-vars': 'warn',
    'arrow-parens': ['warn', 'as-needed'],
    'react/jsx-one-expression-per-line': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-console': ['warn', { allow: ['tron', 'warn', 'error'] }],
    'object-curly-newline': 'off',
    'no-return-assign': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'react/jsx-curly-newline': 'off',
    indent: 'off',
    'operator-linebreak': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-expressions': 'off',
    'react/button-has-type': 'off',
    'no-param-reassign': 'off',
    'arrow-body-style': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    'jsx-a11y/label-has-associated-control': 'warn',
    'no-use-before-define': 'off',
    'prettier/prettier': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['^@'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
