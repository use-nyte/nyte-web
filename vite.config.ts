import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "solid",
      autoCodeSplitting: true
    }),
    solid(),
    tailwindcss()
  ],
  server: {
    port: 52471,
    strictPort: true,
    proxy: {
      "/health/live": {
        target: "http://127.0.0.1:52470",
        changeOrigin: true
      }
    }
  },
  preview: {
    port: 52471,
    strictPort: true
  }
});
