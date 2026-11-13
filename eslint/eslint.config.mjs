import react from 'eslint-plugin-react';
import ts from 'typescript-eslint';

export default [{
  files: ['**/*.{js,jsx,ts,tsx}'],
  languageOptions: { parser: ts.parser, parserOptions: { ecmaFeatures: { jsx: true } } },
  plugins: { react },
  rules: { 'react/jsx-sort-props': 'warn' },
}];
