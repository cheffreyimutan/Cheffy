// Snapshots the already-built CSR app into real static HTML per route, so
// crawlers that don't execute JavaScript (GPTBot, ClaudeBot, PerplexityBot,
// CCBot, and any plain HTTP fetcher) see full content instead of an empty
// <div id="root"></div> shell. Runs after `vite build`, before deploy.
//
// This does NOT change how the app runs for real visitors — it visits the
// exact same client-rendered app in a real headless browser, waits for the
// existing useEffect-driven title/meta/JSON-LD to settle, and writes the
// resulting DOM to disk. Client-side navigation and hydration are untouched.
import { preview } from 'vite';
import puppeteer from 'puppeteer';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { blogs } from '../src/data.js';

const ROUTES = [
  '/',
  '/about',
  '/blog',
  '/community',
  '/services',
  ...blogs.map((b) => `/blog/${b.slug}`),
];

function routeToOutputPath(route) {
  if (route === '/') return path.join('dist', 'index.html');
  return path.join('dist', ...route.split('/').filter(Boolean), 'index.html');
}

async function main() {
  const server = await preview({ preview: { port: 4174, strictPort: true } });
  const base = server.resolvedUrls.local[0].replace(/\/$/, '');

  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();

  try {
    for (const route of ROUTES) {
      await page.goto(`${base}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
      // The existing SEOMeta-style components set title/meta/JSON-LD in a
      // useEffect that runs on mount — give React a beat past network-idle
      // to make sure that effect has committed before snapshotting.
      await new Promise((r) => setTimeout(r, 150));

      const html = await page.content();
      const outPath = routeToOutputPath(route);
      await mkdir(path.dirname(outPath), { recursive: true });
      await writeFile(outPath, html);
      console.log(`✓ prerendered ${route} → ${outPath}`);
    }
  } finally {
    await browser.close();
    await server.httpServer.close();
  }

  console.log(`\nPrerendered ${ROUTES.length} routes.`);
}

main().catch((err) => {
  // Don't fail the whole deploy over this — a working CSR-only build (today's
  // behavior) is better than no build at all. Surface it loudly in build logs
  // so it doesn't go unnoticed; see the plan's Puppeteer risk note if it fails
  // specifically on Render's build container.
  console.error('prerender failed, shipping without it this time:', err);
});
