import js from '@eslint/js';
import globals from 'globals';
import pluginPrettier from 'eslint-plugin-prettier';
import prettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import reactPlugin from 'eslint-plugin-react';
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react: reactPlugin,
      "reactHooks": reactHooks,
      "reactRefresh": reactRefresh,
      prettier: pluginPrettier,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-unused-vars": "error",
      "react/react-in-jsx-scope": "off",
      "react/jsx-runtime": "off",
      "react/jsx-uses-vars": "off",
      "react/jsx-uses-react": "off",
      "react/no-unknown-property": [
        "error",
        {
          ignore: ["object", "attach", "args", "dispose"],
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      // "no-unused-vars": "error",

      "prettier/prettier": [
        "warn",
        {
          endOfLine: "lf",
          semi: true,
          singleQuote: false,
          tabWidth: 2,
          printWidth: 80,
          plugins: ["@ianvs/prettier-plugin-sort-imports"],
          importOrder: [
            "^node:",
            "",
            "^react$",
            "^react/",
            // "^(react/(.*)$)|^(react$)",
            // "^(next/(.*)$)|^(next$)",
            "<THIRD_PARTY_MODULES>",
            "",
            // "^@/types$",
            // "^@/types/(.*)$",
            // "^@/config$",
            // "^@/config/(.*)$",
            // "^@/paths$",
            // "^@/data/(.*)$",
            // "^@/lib/(.*)$",
            // "^@/actions/(.*)$",
            // "^@/contexts/(.*)$",
            // "^@/hooks/(.*)$",
            // "^@/components/(.*)$",
            // "^@/styles/(.*)$",
            "",
            "^@/",
            "^[./]",
          ],
        },
      ],
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      prettier,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
