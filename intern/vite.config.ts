/// <reference types="vitest" />
/// <reference types="vite/client" />
import { createSvgIconsPlugin } from 'vite-plugin-react-svgs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    createSvgIconsPlugin({
      defaultImport: 'component',
    }),
  ],
  test: {
    include: ['**/*.test.tsx', '*.test.tsx'],
    globals: true,
    environment: 'jsdom',
  }
});