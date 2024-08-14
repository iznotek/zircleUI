import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
		lib: {
			entry: resolve(__dirname, 'src/index.js'),
			name: 'zircle',
		},
    rollupOptions: {
			output: {
				globals: {
					vue: 'Vue'
				}
			}
		},
  },
  plugins: [
    vue(),
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
