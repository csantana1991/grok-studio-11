import { defineConfig } from 'vite'

/**
 * Builds the QA agent as one self-contained IIFE for NucMed Board Studio.
 *
 * The studio is a single static HTML file with no bundler, so the engine has to
 * arrive as a plain <script>. Building it from the same TypeScript the app uses
 * is the point: the studio and the workstation apply identical rules, and a
 * change to a validator reaches both.
 *
 *   npm run studio:qa
 */
export default defineConfig({
  // The output lives inside public/, so Vite's public-directory copy step would
  // duplicate the whole folder into itself. Nothing here needs static assets.
  publicDir: false,
  build: {
    lib: {
      entry: 'src/studio/qaAgentEntry.ts',
      name: 'RRQA',
      formats: ['iife'],
      fileName: () => 'qa-agent.js',
    },
    outDir: 'public/studio',
    emptyOutDir: false,
    minify: 'esbuild',
    target: 'es2020',
  },
})
