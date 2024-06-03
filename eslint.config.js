import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import tsplugin from '@typescript-eslint/eslint-plugin';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked.map((config) => ({
        ...config,
        files: ['**/*.ts'], // We use TS config only for TS files
    })),
    {
        files: ['**/*.ts'],
        ignores: ['**/node_modules/**', '**/tmp/**'],
        plugins: {
            '@typescript-eslint': tsplugin,
        },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: import.meta.dirname,
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
