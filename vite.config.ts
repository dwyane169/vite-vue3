import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import';
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    }
  },
  server: {
    port: 3001
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "~/assets/scss/global.scss";'
      }
    }
  }
})
