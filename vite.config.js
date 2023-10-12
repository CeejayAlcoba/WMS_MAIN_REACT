import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Configure build settings
    outDir: 'dist', // Output directory for production build
  },
  server: {
    // Configure development server settings
    port: 3000, // Specify the development server port
  },
})
