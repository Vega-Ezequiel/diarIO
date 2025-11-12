import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import tseslint from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

const typescriptFiles = ['**/*.{ts,tsx,cts,mts}'];
const reactFiles = ['**/*.{ts,tsx,js,jsx}'];

const typescriptConfigs = tseslint.configs['flat/recommended'].map((config) => ({
  ...config,
  files: config.files ?? typescriptFiles
}));

const reactRecommended = {
  ...reactPlugin.configs.flat.recommended,
  files: reactFiles
};

const reactJsxRuntime = {
  ...reactPlugin.configs.flat['jsx-runtime'],
  files: reactFiles
};

const reactHooksRecommended = {
  ...reactHooks.configs.flat.recommended,
  files: reactFiles
};

const reactRefreshRecommended = {
  ...reactRefresh.configs.recommended,
  files: reactFiles,
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
  }
};

const typescriptNoUnusedVars = {
  files: typescriptFiles,
  plugins: {
    '@typescript-eslint': tseslint
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ]
  }
};

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'public/**', 'translations/**', '.astro/**']
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2022
      }
    }
  },
  {
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  js.configs.recommended,
  ...astro.configs['flat/recommended'],
  ...typescriptConfigs,
  typescriptNoUnusedVars,
  reactRecommended,
  reactJsxRuntime,
  reactHooksRecommended,
  reactRefreshRecommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off'
    }
  },
  prettier
];
