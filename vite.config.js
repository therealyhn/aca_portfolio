import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Chunk size warning threshold (kB)
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // React core — uvek se kešira zasebno
          vendor: ['react', 'react-dom'],
          // Sanity CMS client
          sanity: ['@sanity/client', '@sanity/image-url'],
          // Swiper carousel
          swiper: ['swiper'],
        },
      },
    },
  },
})
