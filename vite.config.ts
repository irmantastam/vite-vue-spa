import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { pluginAPIRoutes } from 'vite-plugin-api-routes'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    pluginAPIRoutes({
      server: './src/custom-server/server.ts'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
