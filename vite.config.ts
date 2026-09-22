
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { exec } from "child_process";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    {
      name: 'post-build-script',
      closeBundle: async () => {
        if (mode === 'production') {
          console.log('Building complete, running post-build script for SEO optimization...');
          // Run the post-build script automatically
          exec('node src/postBuild.js', (err, stdout, stderr) => {
            if (err) {
              console.error('Error running post-build script:', err);
              return;
            }
            console.log(stdout);
            if (stderr) console.error(stderr);
          });
        }
      }
    },
    {
      name: 'copy-sitemap-files',
      writeBundle() {
        const publicDir = path.resolve(__dirname, 'public');
        const distDir = path.resolve(__dirname, 'dist');
        
        const sitemapFiles = [
          'sitemap.xml',
          'sitemap_index.xml',
          'page-sitemap.xml',
          'post-sitemap.xml'
        ];
        
        if (!fs.existsSync(distDir)) {
          fs.mkdirSync(distDir, { recursive: true });
        }
        
        sitemapFiles.forEach(file => {
          const sourcePath = path.resolve(publicDir, file);
          const destPath = path.resolve(distDir, file);
          
          if (fs.existsSync(sourcePath)) {
            fs.copyFileSync(sourcePath, destPath);
            console.log(`Copied ${file} to dist folder during build`);
          } else {
            console.warn(`Warning: Source file ${sourcePath} does not exist`);
          }
        });
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Pre-transform code for better SEO
  build: {
    ssrManifest: true,
    outDir: "dist",
    minify: true
  }
}));
