import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' so the built site works from any folder or sub-path on the client's hosting
export default defineConfig({
  plugins: [react()],
  base: './',
  build: { chunkSizeWarningLimit: 1200 },
})
