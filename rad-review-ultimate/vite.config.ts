import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { pmcLiveSearch } from './vite-plugin-pmc'
import { backgroundMatcher } from './vite-plugin-matcher'
import { radAtlas } from './vite-plugin-radatlas'

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), pmcLiveSearch(), backgroundMatcher(), radAtlas()],
  server: {
    // No fixed port: nothing here depends on one (the match endpoint is
    // same-origin, so there are no OAuth callbacks, webhooks or CORS origins
    // tied to a port). Honour PORT when the harness assigns one, otherwise let
    // Vite pick and increment past anything already listening.
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
  },
})
