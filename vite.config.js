import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vitest configuration
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enables global usage of describe, it, expect
    environment: 'jsdom', // Required for testing React components
    setupFiles: './src/Components/setupTests.jsx', // Ensure this file exists
  },
});
