import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';

export default defineConfig({
  plugins: [
    react(),
    replace({
      'process.env.VITE_REACT_APP_API_URL': JSON.stringify(process.env.VITE_REACT_APP_API_URL),
    }),
  ],
  server: {
    port: 3000,
  },
});
