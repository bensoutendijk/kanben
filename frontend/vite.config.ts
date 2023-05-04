import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

const { VITE_SERVER_PORT = "3000", VITE_PREVIEW_PORT = "3001" } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}"]
      },
      manifest: {
        name: "Kanben",
        short_name: "KB",
        display: "standalone"
      }
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  server: {
    port: parseInt(VITE_SERVER_PORT),
    host: "0.0.0.0",
    cors: true
  },
  preview: {
    port: parseInt(VITE_PREVIEW_PORT),
    host: "0.0.0.0",
    cors: true
  }
});
