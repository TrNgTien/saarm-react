import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';
import { resolve } from 'path';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src/'),
    },
  },
  build: {
    minify: true,
    reportCompressedSize: false,
    sourcemap: false,
  },
  plugins: [
    splitVendorChunkPlugin(),
    react(),
    checker({
      overlay: { initialIsOpen: false },
      typescript: true,
    }),
  ],
  server: {
    open: true,
    hmr: true,
    strictPort: true,
    port: 3004,
    watch: {
      usePolling: true,
    },
  },
  preview: {
    open: true,
    strictPort: true,
    port: 3444,
  },
});

