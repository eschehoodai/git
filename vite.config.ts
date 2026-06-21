import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['work-1-fvjcurfpfcmuofrk.prod-runtime.all-hands.dev', 'work-2-fvjcurfpfcmuofrk.prod-runtime.all-hands.dev'],
  },
})
