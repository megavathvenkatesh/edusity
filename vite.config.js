import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // Add Rollup options here
      rollupOptions: {
        // Specify external modules to exclude from bundling
        external: ['/src/main.jsx'],
      },
    }),
  ],
});
