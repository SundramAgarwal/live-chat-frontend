import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteCommonjs, esbuildCommonjs } from "@originjs/vite-plugin-commonjs";
import path from "path";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteCommonjs(), react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  build: {
    outDir: "build",
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        legacy({
          targets: ["defaults", "not IE 11"],
        }),
      ],
    },
  },
});
