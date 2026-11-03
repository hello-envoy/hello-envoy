import { defineConfig } from "vite";

export default defineConfig({
  root: "envoy-2.0-mockups",
  server: {
    host: true,
    port: 5174,
    strictPort: true,
  },
});
