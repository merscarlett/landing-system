import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "fs";
import path from "path";

const landingsDir = path.resolve(__dirname, "src/landings");

const entries = fs
  .readdirSync(landingsDir)
  .filter((dir) => fs.existsSync(path.join(landingsDir, dir, "index.html")))
  .reduce(
    (acc, dir) => {
      acc[dir] = path.resolve(landingsDir, dir, "index.html");
      return acc;
    },
    {} as Record<string, string>
  );

export default defineConfig({
  root: path.resolve(__dirname, "src"),
  plugins: [react(), tailwindcss()],
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: entries,
    },
  },
  server: {
    open: "/landings/books_for_soldiers/index.html",
  },
});
