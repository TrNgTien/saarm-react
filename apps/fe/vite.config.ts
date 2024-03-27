import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3009,
    host: true,
    hmr: true,
    open: true,
    strictPort: true,
  },
});
