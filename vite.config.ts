import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: (path: string) =>
          path.split("/").reverse()[
            path.split("/").reverse().indexOf("node_modules") - 1
          ],
      },
      input: {
        main: resolve(__dirname, "index.html"),
        spaFallback: resolve(__dirname, "404.html"),
      },
    },
  },
  base: "/home.github.io/",
}));
