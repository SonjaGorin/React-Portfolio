import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import HeaderCss from "./src/components/Header/Header.css"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    rollupOptions: {
      external: [HeaderCss],
    }
  }
});
