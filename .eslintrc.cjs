module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    '.eslintrc.js',
    '.eslintrc.json',
    'package.json',
    'vite.config.js',
    'babel.config.json',
    'jest.config.js',
    'src/__test__/*',
    '**/*.test.js',
    '**/*.tests.ts',
    '**/*.test.ts',
    '**/*.config.js',
    '**/*.config.ts',
    '**/*.config.test.js',
  ],
}
