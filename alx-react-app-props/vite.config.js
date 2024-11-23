import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.js', '**/*.jsx', '**/*.svg', '**/*.png', '**/*.jpg', '**/*.gif'], // Add other file types as needed
});