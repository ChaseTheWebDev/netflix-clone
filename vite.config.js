import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: {
      target: 'http://localhost:3000', // The URL to open
      // For Google Chrome, specify the browser name or path
      app: { name: 'chrome' } // Adjust this based on your operating system
    }
  },
});
