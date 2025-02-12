import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Ensure aliasing is correct
    },
  },
  build: {
    outDir: 'dist',
  },
});
