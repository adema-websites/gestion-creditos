// Config alternativo para builds Docker/Node.js (Coolify).
// Usa el preset node-server de TanStack Start en lugar de Cloudflare Workers.
// Comando: vite build --config vite.config.docker.ts
import { defineConfig } from "@tanstack/react-start/config";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    preset: "node-server",
  },
  vite: {
    plugins: [tailwindcss(), tsConfigPaths()],
  },
});
