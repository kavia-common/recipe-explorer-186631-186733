import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const env = typeof process !== 'undefined' ? process.env : {};
const VITE_PORT = Number(env.VITE_PORT || 3000);
const VITE_ENABLE_SOURCE_MAPS = String(env.VITE_ENABLE_SOURCE_MAPS || '').toLowerCase() === 'true';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['.kavia.ai'],
    port: VITE_PORT,
    strictPort: true,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    watch: {
      usePolling: true,
    },
  },
  build: {
    sourcemap: VITE_ENABLE_SOURCE_MAPS ? true : false,
  },
})
