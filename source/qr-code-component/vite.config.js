import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/qr-code-component/",
  plugins: [react()],
});
