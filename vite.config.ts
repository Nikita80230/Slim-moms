import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

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
