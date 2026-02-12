import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://script.google.com',
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(
            /^\/api/,
            '/macros/s/AKfycbyug76kzxAJce5qK1BI4r2ZOf-QSSMqHGn0HPCt1T-HRED3QTiIoH4KD5zRUe8zHUF6uA/exec'
          ),
      },
    },
  },
})