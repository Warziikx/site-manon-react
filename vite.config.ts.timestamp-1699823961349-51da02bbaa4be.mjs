// vite.config.ts
import { defineConfig } from "file:///D:/Workspace/site-manon-react/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Workspace/site-manon-react/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { htmlPrerender } from "file:///D:/Workspace/site-manon-react/node_modules/vite-plugin-html-prerender/dist/index.js";
import * as path from "path";
import { mesPrestationPhoto } from "@/Service";
var __vite_injected_original_dirname = "D:\\Workspace\\site-manon-react";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    htmlPrerender({
      /**
       * Required: Output directory of "vite build"
       */
      staticDir: path.join(__vite_injected_original_dirname, "build"),
      /**
       * Required: List of routes to pre-render.
       */
      routes: ["/", "/contact", "/services", mesPrestationPhoto.map((p) => {
        return { name: p.title };
      })],
      /**
       * Optional: To minify html. Uses https://github.com/kangax/html-minifier.
       */
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true
      }
    })
  ],
  build: { outDir: "./build" },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__vite_injected_original_dirname, "src") }]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxXb3Jrc3BhY2VcXFxcc2l0ZS1tYW5vbi1yZWFjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcV29ya3NwYWNlXFxcXHNpdGUtbWFub24tcmVhY3RcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1dvcmtzcGFjZS9zaXRlLW1hbm9uLXJlYWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0IHsgaHRtbFByZXJlbmRlciB9IGZyb20gXCJ2aXRlLXBsdWdpbi1odG1sLXByZXJlbmRlclwiO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XHJcblxyXG5pbXBvcnQgeyBQcmVzdGF0aW9uRGF0YSwgbWVzUHJlc3RhdGlvblBob3RvIH0gZnJvbSBcIkAvU2VydmljZVwiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgaHRtbFByZXJlbmRlcih7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBSZXF1aXJlZDogT3V0cHV0IGRpcmVjdG9yeSBvZiBcInZpdGUgYnVpbGRcIlxyXG4gICAgICAgKi9cclxuICAgICAgc3RhdGljRGlyOiBwYXRoLmpvaW4oX19kaXJuYW1lLCBcImJ1aWxkXCIpLFxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIFJlcXVpcmVkOiBMaXN0IG9mIHJvdXRlcyB0byBwcmUtcmVuZGVyLlxyXG4gICAgICAgKi9cclxuICAgICAgcm91dGVzOiBbXCIvXCIsIFwiL2NvbnRhY3RcIiwgXCIvc2VydmljZXNcIixtZXNQcmVzdGF0aW9uUGhvdG8ubWFwKChwOiBQcmVzdGF0aW9uRGF0YSkgPT4ge1xyXG5cdFx0cmV0dXJuIHsgbmFtZTogcC50aXRsZSB9O1xyXG5cdCAgfSkgXSxcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBPcHRpb25hbDogVG8gbWluaWZ5IGh0bWwuIFVzZXMgaHR0cHM6Ly9naXRodWIuY29tL2thbmdheC9odG1sLW1pbmlmaWVyLlxyXG4gICAgICAgKi9cclxuICAgICAgbWluaWZ5OiB7XHJcbiAgICAgICAgY29sbGFwc2VCb29sZWFuQXR0cmlidXRlczogdHJ1ZSxcclxuICAgICAgICBjb2xsYXBzZVdoaXRlc3BhY2U6IHRydWUsXHJcbiAgICAgICAgZGVjb2RlRW50aXRpZXM6IHRydWUsXHJcbiAgICAgICAga2VlcENsb3NpbmdTbGFzaDogdHJ1ZSxcclxuICAgICAgICBzb3J0QXR0cmlidXRlczogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgYnVpbGQ6IHsgb3V0RGlyOiBcIi4vYnVpbGRcIiB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiBbeyBmaW5kOiBcIkBcIiwgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpIH1dLFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStRLFNBQVMsb0JBQW9CO0FBQzVTLE9BQU8sV0FBVztBQUNsQixTQUFTLHFCQUFxQjtBQUM5QixZQUFZLFVBQVU7QUFFdEIsU0FBeUIsMEJBQTBCO0FBTG5ELElBQU0sbUNBQW1DO0FBUXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlaLFdBQWdCLFVBQUssa0NBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS3ZDLFFBQVEsQ0FBQyxLQUFLLFlBQVksYUFBWSxtQkFBbUIsSUFBSSxDQUFDLE1BQXNCO0FBQ3hGLGVBQU8sRUFBRSxNQUFNLEVBQUUsTUFBTTtBQUFBLE1BQ3RCLENBQUMsQ0FBRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0EsUUFBUTtBQUFBLFFBQ04sMkJBQTJCO0FBQUEsUUFDM0Isb0JBQW9CO0FBQUEsUUFDcEIsZ0JBQWdCO0FBQUEsUUFDaEIsa0JBQWtCO0FBQUEsUUFDbEIsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPLEVBQUUsUUFBUSxVQUFVO0FBQUEsRUFDM0IsU0FBUztBQUFBLElBQ1AsT0FBTyxDQUFDLEVBQUUsTUFBTSxLQUFLLGFBQWtCLGFBQVEsa0NBQVcsS0FBSyxFQUFFLENBQUM7QUFBQSxFQUNwRTtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
