import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react/jsx-runtime'],
          'firebase': [
            'firebase/app',
            'firebase/auth',
            'firebase/firestore'
          ],
          'charts': ['recharts'],
          'ui': [
            '@radix-ui/react-tooltip',
            '@radix-ui/react-dropdown-menu',
            "@radix-ui/react-avatar",
            "@radix-ui/react-label",
            "@radix-ui/react-select",
            "@radix-ui/react-slot",
          ]
        }
      }
    },
    chunkSizeWarningLimit: 600,
  },
})

