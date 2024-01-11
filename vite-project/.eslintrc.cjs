module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'vue', 'vite'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks':'off',
    "@typescript-eslint/no-explicit-any": "off"
  },
}