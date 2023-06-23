import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts", "lib/**/*.ts"],
  format: ["esm", "cjs"],
  ignoreWatch: ["**/dist", "**/node_modules", "**/.DS_STORE", "**/.git"],
  dts: true,
  splitting: false,
  bundle: false,
  sourcemap: false,
  clean: true,
});
