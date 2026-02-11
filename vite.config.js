import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    define: {
      // Esto permite que process.env funcione en Vite
      'process.env.VITE_MAPBOX_TOKEN': JSON.stringify(env.VITE_MAPBOX_TOKEN)
    },
    optimizeDeps: {
      include: ['mapbox-gl', '@mapbox/mapbox-gl-geocoder']
    }
  }
})