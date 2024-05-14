import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {find: '@src,', replacement: path.resolve(__dirname, 'src')},
      {find: '@assets,', replacement: path.resolve(__dirname, 'src/assets')},
      {find: '@components,', replacement: path.resolve(__dirname, 'src/components')},
      {find: '@utils,', replacement: path.resolve(__dirname, 'src/utils')},
    ],
  },
});
