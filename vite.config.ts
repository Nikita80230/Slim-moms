import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteSvgrPlugin from "vite-plugin-svgr";
import viteTsconfigPathsPlugin from "vite-tsconfig-paths";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPathsPlugin(),
    viteSvgrPlugin({ include: "**/*.svg?react" }),
  ],
  server: {
    open: true,
    port: 3000,
  },
});
