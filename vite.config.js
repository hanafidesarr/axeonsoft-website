import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

// Custom plugin to duplicate index.html to 404.html for GitHub Pages SPA routing
function githubPagesSpaPlugin() {
  return {
    name: 'github-pages-spa-404',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist')
      const indexPath = path.join(distDir, 'index.html')
      const notFoundPath = path.join(distDir, '404.html')

      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath)
        console.log('✓ Successfully generated 404.html for GitHub Pages SPA routing.')
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    githubPagesSpaPlugin()
  ],
  server: {
    port: 3000,
    open: true
  },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-icons': ['lucide-react']
        }
      }
    }
  }
})
