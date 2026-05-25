#!/usr/bin/env node
/**
 * Query LuisCore resonance mesh — GET /api/resonance-query on the public devnet.
 * Usage: LUISCORE_ORIGIN=https://luiscore.com node scripts/query.js [query]
 */
const origin = (process.env.LUISCORE_ORIGIN || 'https://luiscore.com').replace(/\/$/, '');
const query = process.argv[2] || 'spfd';

async function main() {
  const url = `${origin}/api/resonance-query?q=${encodeURIComponent(query)}`;
  const res = await fetch(url, { headers: { accept: 'application/json' } });
  const text = await res.text();
  let body;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = text;
  }
  console.log(`GET ${url} → ${res.status}`);
  console.log(typeof body === 'string' ? body : JSON.stringify(body, null, 2));
  if (!res.ok) process.exit(1);
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
