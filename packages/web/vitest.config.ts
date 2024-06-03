import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [tsconfigPaths(), react()],
    test: {
        clearMocks: true,
        coverage: {
            reporter: ['cobertura'],
        },
        environment: 'jsdom',
        environmentOptions: {
            jsdom: {
                resources: 'usable',
            },
        },
        globals: true,
        outputFile: { junit: 'junit.xml' },
        reporters: ['default', 'junit'],
        setupFiles: [],
    },
});
