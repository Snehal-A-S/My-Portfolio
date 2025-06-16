import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
    
  ],
  server: {
    allowedHosts: [
      '03e1-2409-40f2-1167-9f5b-f881-7cbd-997-9d0a.ngrok-free.app'
    ]
  }
  
})
