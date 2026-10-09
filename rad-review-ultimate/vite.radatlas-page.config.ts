import { defineConfig } from 'vite'

/**
 * Builds the full RAD ATLAS page as one self-contained IIFE for Board Studio.
 *
 * A second config rather than a second entry in vite.qa-agent.config.ts because
 * Vite's library mode emits one IIFE per build; both write into public/studio/
 * and are loaded by radatlas.html as plain scripts.
 *
 *   npm run studio:atlas
 */
export default defineConfig({
  // Output lives inside public/, so the public-directory copy step would
  // duplicate the folder into itself.
  publicDir: false,
  build: {
    lib: {
      entry: 'src/studio/radAtlasPageEntry.ts',
      name: 'RadAtlasPage',
      formats: ['iife'],
      fileName: () => 'radatlas.js',
    },
    outDir: 'public/studio',
    emptyOutDir: false,
    minify: 'esbuild',
    target: 'es2020',
  },
})
