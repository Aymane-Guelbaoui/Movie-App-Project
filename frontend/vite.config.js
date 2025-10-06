import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // important for Vercel relative paths
  build: {
    outDir: 'dist', // Vercel serves this folder
    emptyOutDir: true
  }
})
