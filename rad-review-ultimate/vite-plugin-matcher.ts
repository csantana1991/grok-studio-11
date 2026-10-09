/**
 * ALWAYS-ON BACKGROUND MATCHER
 *
 * Starts the match-index builder as a child process alongside the dev server,
 * so figures keep accumulating whether or not a browser tab is open. The
 * in-app loop only runs while a tab is alive; this does not.
 *
 * Safety:
 *  - the builder takes a single-writer lock, so a manually started
 *    `npm run index:watch` and this one cannot corrupt the index between them
 *  - the child is killed when the dev server closes
 *  - set RR_NO_MATCHER=1 to disable
 */

import type { Plugin } from 'vite'
import { spawn, type ChildProcess } from 'node:child_process'
import { createWriteStream, mkdirSync, existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

let child: ChildProcess | null = null

function start(root: string) {
  if (child || process.env.RR_NO_MATCHER === '1') return
  // Vitest also boots a Vite server. The matcher is a long-lived network job
  // and must never attach itself to a test run.
  if (process.env.VITEST || process.env.NODE_ENV === 'test') return

  const logPath = resolve(root, 'index-build.log')
  mkdirSync(dirname(logPath), { recursive: true })
  const log = createWriteStream(logPath, { flags: 'a' })

  // Run vite-node's JS entry with the current node binary. The `.bin` shims are
  // a shell script and a .cmd: Node 24 refuses to spawn the .cmd directly
  // (EINVAL), and `shell: true` would fix that only by concatenating args
  // unescaped, which Node flags as a security deprecation (DEP0190). Going
  // straight to the .mjs avoids both.
  const cli = resolve(root, 'node_modules/vite-node/dist/cli.mjs')
  if (!existsSync(cli)) {
    // eslint-disable-next-line no-console
    console.log('  \x1b[33m➜\x1b[0m  matcher: vite-node not installed, skipping')
    return
  }

  child = spawn(process.execPath, [cli, 'scripts/build-match-index.ts', '--watch'], {
    cwd: root,
    stdio: ['ignore', 'pipe', 'pipe'],
    windowsHide: true,
  })

  child.on('error', (err) => {
    log.write(`\n[matcher] failed to start: ${err.message}\n`)
    // eslint-disable-next-line no-console
    console.log(`  \x1b[33m➜\x1b[0m  matcher: could not start (${err.message})`)
    child = null
  })

  child.stdout?.pipe(log)
  child.stderr?.pipe(log)

  child.on('exit', (code) => {
    log.write(`\n[matcher] exited with code ${code}\n`)
    child = null
  })

  // eslint-disable-next-line no-console
  console.log(
    `  \x1b[32m➜\x1b[0m  \x1b[1mmatcher\x1b[0m: background figure matching running → index-build.log`,
  )
}

function stop() {
  if (!child) return
  child.kill()
  child = null
}

export function backgroundMatcher(): Plugin {
  return {
    name: 'rr-background-matcher',
    apply: 'serve',
    configureServer(server) {
      // Delay slightly so the dev server finishes booting first: the builder's
      // first query is heavy and would otherwise compete with the initial load.
      const t = setTimeout(() => start(server.config.root), 4000)
      server.httpServer?.on('close', () => {
        clearTimeout(t)
        stop()
      })
      process.once('exit', stop)
      process.once('SIGINT', () => {
        stop()
        process.exit(0)
      })
    },
  }
}
