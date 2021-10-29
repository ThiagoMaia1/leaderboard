module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'prettier',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        bracketSpacing: true,
        bracketSameLine: false,
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 80,
        tabWidth: 2,
        semi: true,
        endOfLine: 'auto',
        proseWrap: 'never',
        overrides: [
          {
            files: ['**/*.json', '**/*.html'],
            options: {
              singleQuote: false,
            },
          },
        ],
      },
    ],
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/display-name': 'off',
    'react/no-unused-prop-types': 'warn',
    eqeqeq: ['warn', 'always', { null: 'ignore' }],
  },
};
