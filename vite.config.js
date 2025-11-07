import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub repo name (for example: novatech1)
export default defineConfig({
  plugins: [react()],
  base: '/novatech1/',  // 👈 this must match your GitHub repository name
})
