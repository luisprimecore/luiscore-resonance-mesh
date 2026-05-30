# luiscore-resonance-mesh

What this is: **public, machine-readable resonance mesh query artifacts** for LuisCore experimental recursive cognition infrastructure — JSON Schema, example query body, and a Node client against the operational API at [luiscore.com](https://luiscore.com).

## Get an API key

Free LuisCore read API access (status, telemetry, ontology, agents): [https://luiscore.com/developers#signup](https://luiscore.com/developers#signup) — approval typically within 24 hours.

Live API:

- `GET https://luiscore.com/api/resonance-query?q=<text>`
- `POST https://luiscore.com/api/resonance-query` with `{ "query": "<text>" }`

Quick start:

```bash
export LUISCORE_ORIGIN=https://luiscore.com
node scripts/query.js spfd
```

Files:

- `schemas/resonance-query.json` — response schema (Experimental devnet metrics)
- `examples/query.json` — example POST body
- `scripts/query.js` — queries the live endpoint

License: MIT

This is experimental infrastructure. APIs may change without notice.
