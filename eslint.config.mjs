import reactRefresh from 'eslint-plugin-react-refresh';
import reactThree from '@react-three/eslint-plugin';
import globals from 'globals';
import js from '@eslint/js';
export default [
  {
    ignores: ['**/dist', '**/.eslintrc.cjs'],
  },
  js.configs.recommended,
  {
    plugins: {
      'react-refresh': reactRefresh,
      '@react-three': reactThree,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    settings: {
      react: {
        version: '18.2',
      },
    },

    rules: {
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],
      'prettier/prettier': ['error', { singleQuote: true }],
    },
  },
];
