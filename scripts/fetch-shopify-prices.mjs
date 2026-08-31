// Build-time fetch of real price/availability for the curated product cards.
// Uses only public, unauthenticated Shopify endpoints (no Storefront API token
// is available to this project) so it can run unattended on every deploy.
import { writeFile, mkdir } from 'node:fs/promises';
import { products } from '../src/data.js';

const STORE = 'https://shop.cheffyscrystals.com';
const OUT_DIR = new URL('../src/generated/', import.meta.url);
const OUT_FILE = new URL('live-products.json', OUT_DIR);

async function fetchProduct(handle) {
  const [jsonRes, pageRes] = await Promise.all([
    fetch(`${STORE}/products/${handle}.json`),
    fetch(`${STORE}/products/${handle}`),
  ]);

  if (!jsonRes.ok) throw new Error(`${handle}: product JSON ${jsonRes.status}`);
  const { product } = await jsonRes.json();

  const prices = product.variants.map((v) => Number(v.price));
  const compareAtPrices = product.variants
    .map((v) => (v.compare_at_price ? Number(v.compare_at_price) : null))
    .filter((v) => v !== null);

  const price = Math.min(...prices);
  const highestCompareAt = compareAtPrices.length ? Math.max(...compareAtPrices) : null;
  const was = highestCompareAt && highestCompareAt > price ? highestCompareAt : null;

  // The public product JSON doesn't expose live availability. The rendered
  // page does, via the disabled attribute on the real add-to-cart button.
  let stock = 'In stock';
  if (pageRes.ok) {
    const html = await pageRes.text();
    const buttonMatch = html.match(/id="ProductSubmitButton-[^"]*"[^>]*>/);
    if (buttonMatch && buttonMatch[0].includes('disabled')) stock = 'Sold out';
  }

  return { handle, price, was, stock };
}

async function main() {
  const results = {};
  const errors = [];

  for (const p of products) {
    if (!p.handle) continue;
    try {
      results[p.handle] = await fetchProduct(p.handle);
      console.log(`✓ ${p.handle}: ₱${results[p.handle].price} (${results[p.handle].stock})`);
    } catch (err) {
      errors.push(`${p.handle}: ${err.message}`);
      console.warn(`✗ ${p.handle}: ${err.message} — keeping static fallback`);
    }
  }

  await mkdir(OUT_DIR, { recursive: true });
  await writeFile(
    OUT_FILE,
    JSON.stringify({ fetchedAt: new Date().toISOString(), products: results }, null, 2),
  );

  console.log(`\nWrote ${Object.keys(results).length}/${products.length} live prices to src/generated/live-products.json`);
  if (errors.length) console.warn(`${errors.length} product(s) fell back to static data:\n  ${errors.join('\n  ')}`);
}

main().catch((err) => {
  // Never fail the build over this — static data.js values are a safe fallback.
  console.error('fetch-shopify-prices failed entirely, continuing with static fallback:', err);
});
