import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { splitVendorChunkPlugin, UserConfig } from 'vite';
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
      reportCompressedSize: false,
      sourcemap: false,
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
      splitVendorChunkPlugin(),
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
