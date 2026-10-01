import { copyFile } from 'node:fs/promises'
import path from 'node:path'

const dist = path.join(process.cwd(), 'dist')

// GitHub Pages has no rewrite support, so deep links 404. Copying index.html to
// 404.html makes the SPA boot on unknown paths and let vue-router resolve the route.
try {
  await copyFile(path.join(dist, 'index.html'), path.join(dist, '404.html'))
  console.log('Copied dist/index.html -> dist/404.html (GitHub Pages SPA fallback)')
} catch {
  console.error('Could not create dist/404.html - run "npm run build" first.')
  process.exit(1)
}