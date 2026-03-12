import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/ra-forms-hex2rgb/",
  plugins: [react()],
})
