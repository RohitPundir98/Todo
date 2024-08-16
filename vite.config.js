import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      // Disable ESLint
      eslint: {
        enable: false,
      },
    }),
  ],
});
