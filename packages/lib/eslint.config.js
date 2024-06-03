import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import tsplugin from '@typescript-eslint/eslint-plugin';
import globals from 'globals';

export default tseslint.config(
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
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
