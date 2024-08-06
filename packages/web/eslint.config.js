import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import tsplugin from '@typescript-eslint/eslint-plugin';
import neon from 'eslint-config-neon/flat/next.js';
import globals from 'globals';

export default tseslint.config(
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        ignores: ['**/build/**', '**/dist/**', '**/node_modules/**', '**/.next/**'],
    },
    eslint.configs.recommended,
    ...neon.map((config) => ({
        ...config,
        files: ['**/*.ts'], // We use TS config only for TS files
    })),
    ...tseslint.configs.recommendedTypeChecked.map((config) => ({
        ...config,
        files: ['**/*.ts'], // We use TS config only for TS files
    })),
    {
        files: ['**/*.ts'],
        plugins: {
            '@typescript-eslint': tsplugin,
        },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                project: true,
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    },
);

// export default {
//     extends: ['eslint:recommended'],
//     overrides: [
//         {
//             files: ['*.tsx'],
//             rules: {
//                 '@typescript-eslint/explicit-function-return-type': 'off',
//             },
//         },
//     ],
//     rules: {
//         'implicit-arrow-linebreak': 'off',
//         'object-curly-newline': 'off',
//         'operator-linebreak': 'off',
//         'function-paren-newline': 'off',
//         '@typescript-eslint/indent': 'off',
//         'linebreak-style': 'off',
//     },
// };
