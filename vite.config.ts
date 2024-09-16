import { resolve } from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

import libCss from 'vite-plugin-libcss';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), libCss()],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        icons: resolve(__dirname, 'src/icons.ts'),
        utils: resolve(__dirname, 'src/utils/index.ts'),
      },
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'style.css';
          return assetInfo.name;
        },
      },
    },
  },
});
