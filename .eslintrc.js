module.exports = {
  extends: [
    require.resolve('eslint-config-standard'),
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  root: true,
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-shadow': [2],
    semi: [1, 'always'],
    'max-len': [1, 100],
    'object-property-newline': [1, { allowAllPropertiesOnSameLine: true }],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    quotes: [2, 'single', { avoidEscape: true }],
    'operator-linebreak': [2, 'before'],
    'object-curly-spacing': [1, 'always'],
    'array-bracket-spacing': [1, 'never'],
    'comma-dangle': [1, 'always-multiline'],
    indent: [1, 2, { SwitchCase: 1 }],
    'quote-props': [1, 'as-needed'],
    'arrow-parens': [2, 'as-needed'],
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true,
    }],
    'comma-spacing': [1, {
      before: false,
      after: true,
    }],
    'no-return-assign': 0,
    'no-control-regex': 0,
    'react/prop-types': 0,
  },
};
