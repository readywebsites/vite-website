import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/gta6-website/', // 👈 ये GitHub Pages पर सही asset path के लिए ज़रूरी है
  plugins: [react(), tailwindcss()],
})
