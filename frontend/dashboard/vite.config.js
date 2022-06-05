// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Correct import statement
import { resolve } from 'path'; // Import resolve from the 'path' module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Correct usage of the react plugin
  build: {
    chunkSizeWarningLimit: 1000 * 1024, // Set the limit to 1 MB
    rollupOptions: {
      // Exclude non-module files from bundling
      input: {
        main: resolve(__dirname, 'src/App.jsx'),
        // Add other entries as needed
      },
    },
  },
  server: {
    port: 4173, // Change this to the desired port number
  },
});
