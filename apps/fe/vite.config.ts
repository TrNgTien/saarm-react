import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { UserConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { VitePWA } from 'vite-plugin-pwa';

export default (): UserConfig => {
  return {
    resolve: {
      alias: {
        '@': resolve('src/'),
      },
    },

    build: {
      minify: true,
      sourcemap: false,
      reportCompressedSize: false,
      rollupOptions: {
        external: [/^\/fonts*:.*/, /^\/locales*:.*/],
        output: {
          manualChunks: (id: string) => {
            if (id.includes('node_modules')) {
              return 'vendor_saarm';
            }
          },
        },
      },
      cssCodeSplit: true,
      emptyOutDir: true,
      manifest: true,
      chunkSizeWarningLimit: 626,
    },

    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        },
        //Will have the Web App Manifest and the generated service worker
        //if enabled: true
        devOptions: {
          enabled: false,
        },
      }),
      react(),
      checker({
        overlay: { initialIsOpen: false },
        typescript: true,
      }),
    ],
    server: {
      open: true,
      host: true,
      port: 3009,
      hmr: true,
      strictPort: false,
    },
    preview: {
      open: true,
      strictPort: true,
      port: 3444,
    },
  };
};
