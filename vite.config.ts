import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src/client',
  server: {
    port: 4400,
    proxy: {
      '/api/': {
        target: 'http://localhost:4500',
        changeOrigin: true
      }
    },
    fs: {
      allow: [
        resolve(__dirname, 'src'),
        resolve(__dirname, 'node_modules')
      ]
    }
  },
  build: {
    outDir: '../../dist/client',
    emptyOutDir: true
  }
});
