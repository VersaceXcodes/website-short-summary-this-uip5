import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['.modal.host', '.wo-qeb87fsaim6iltfcrmhhs9lke.w.modal.host'],
  },
})
