/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react';

const config: UserConfigExport = defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    outputFile: 'test-results/junit.xml',
    reporters: ['junit', 'verbose'],
    watch: false,
  },
});

export default config;
