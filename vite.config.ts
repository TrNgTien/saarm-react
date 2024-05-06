import replace from '@rollup/plugin-replace';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { UserConfig } from 'vite';
import checker from 'vite-plugin-checker';
import Inspect from 'vite-plugin-inspect';
import { VitePWA } from 'vite-plugin-pwa';
import pkg from './package.json';
import { pwaOptions } from './setup/setupPWA';

const { dependencies, devDependencies, name, version } = pkg;

const PLATFORM = process.platform;

const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: new Date(),
  lastBuildTimeMs: Date.now(),
  // envPrefix: ENV_PREFIX,
  platform: PLATFORM,
  // env: process.env
};

const replaceOptions = { __DATE__: new Date().toISOString() };

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
      VitePWA(pwaOptions),
      //   registerType: 'autoUpdate',
      //   injectRegister: 'auto',
      //   workbox: {
      //     globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      //   },
      //   //Will have the Web App Manifest and the generated service worker
      //   //if enabled: true
      //   devOptions: {
      //     enabled: false,
      //   },
      // }),
      react(),
      Inspect(),
      replace(replaceOptions) as any,
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
      strictPort: true,
    },
    preview: {
      open: true,
      strictPort: true,
      port: 3444,
    },
  };
};
