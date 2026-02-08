import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        "ring-builder": "src/main.tsx",
        "choose-setting": 'src/choose-setting.jsx',
      },
      output: {
        dir: "../assets",
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
        // Prevent code splitting to ensure single React instance
        // This fixes "Invalid hook call" error in production
        // inlineDynamicImports: true,
        // Alternatively, you can use manualChunks to keep React together
        // manualChunks: undefined,
      },
    },
    watch: {},
    emptyOutDir: false,
    // Extend the chunk size warning limit to suppress the warning for larger bundles
    chunkSizeWarningLimit: 5000,
  },
});
