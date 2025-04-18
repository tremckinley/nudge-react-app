import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    outDir: 'dist', // Specify the output directory
    rollupOptions: {
      output: {
        // Optional: Configure output file names if needed
        // entryFileNames: 'js/[name].js',
        // chunkFileNames: 'js/[name].js',
        // assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});