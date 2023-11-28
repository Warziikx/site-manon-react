import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { htmlPrerender } from "vite-plugin-html-prerender";
import { viteStaticCopy } from "vite-plugin-static-copy";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "public/*",
          dest: "public",
        },
      ],
    }),
    htmlPrerender({
      /**
       * Required: Output directory of "vite build"
       */
      staticDir: path.join(__dirname, "build"),

      /**
       * Required: List of routes to pre-render.
       */
      routes: [
        "/",
        "/contact",
        "/service",
        "/service/portrait",
        "/service/famille",
        "/service/animaux",
        "/service/packshot",
        "/service/evenement",
      ],

      /**
       * Optional: To minify html. Uses https://github.com/kangax/html-minifier.
       */
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true,
      },
    }),
  ],
  build: { copyPublicDir: false, outDir: "./build" },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
