import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    // Pin the dev port so the browser origin is deterministic and always
    // matches the backend CORS allowlist. strictPort fails loudly if 5173
    // is occupied (by a stale dev server) instead of silently drifting.
    port: 5173,
    strictPort: true,
  },
})
