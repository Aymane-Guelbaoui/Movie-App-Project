import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',  // important: makes asset paths relative for Vercel
  build: {
    outDir: 'dist', // Vercel serves this folder
  },
})
