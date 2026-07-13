import { describe, it, expect, beforeEach } from 'vitest';
import products from '../routes/products/_products.js';

// Replicate the lookup logic from [slug].json.js
function buildProductLookup() {
  const lookup = new Map();
  products.forEach(group => {
    if (group.products) {
      group.products.forEach(product => {
        lookup.set(product.slug, JSON.stringify(product));
      });
    } else {
      lookup.set(group.slug, JSON.stringify(group));
    }
  });
  return lookup;
}

// Replicate the lookup logic from landing/[slug].json.js
function buildLandingLookup() {
  const lookup = new Map();
  products.forEach(group => {
    lookup.set(group.slug, JSON.stringify(group));
  });
  return lookup;
}

function makeRes() {
  const res = {
    statusCode: null,
    body: null,
    writeHead(code) {
      this.statusCode = code;
    },
    end(data) {
      this.body = data;
    },
  };
  return res;
}

describe('product route lookup ([slug].json.js logic)', () => {
  let lookup;

  beforeEach(() => {
    lookup = buildProductLookup();
  });

  it('builds a non-empty lookup map', () => {
    expect(lookup.size).toBeGreaterThan(0);
  });

  it('contains a known product slug (sentinel-silver-frame)', () => {
    expect(lookup.has('sentinel-silver-frame')).toBe(true);
  });

  it('returns 200 and valid JSON for a known slug', () => {
    const req = { params: { slug: 'sentinel-silver-frame' } };
    const res = makeRes();

    if (lookup.has(req.params.slug)) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(lookup.get(req.params.slug));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Not found' }));
    }

    expect(res.statusCode).toBe(200);
    const parsed = JSON.parse(res.body);
    expect(parsed.slug).toBe('sentinel-silver-frame');
    expect(parsed.name).toBeTruthy();
  });

  it('returns 404 for an unknown slug', () => {
    const req = { params: { slug: 'non-existent-product-xyz' } };
    const res = makeRes();

    if (lookup.has(req.params.slug)) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(lookup.get(req.params.slug));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Not found' }));
    }

    expect(res.statusCode).toBe(404);
    const parsed = JSON.parse(res.body);
    expect(parsed.message).toBe('Not found');
  });

  it('returned JSON includes expected product fields', () => {
    const slug = 'sentinel-silver-frame';
    const parsed = JSON.parse(lookup.get(slug));
    expect(parsed).toHaveProperty('slug');
    expect(parsed).toHaveProperty('name');
    expect(parsed).toHaveProperty('images');
  });

  it('every value in the map is valid JSON', () => {
    lookup.forEach((value, key) => {
      expect(() => JSON.parse(value), `slug "${key}" has invalid JSON`).not.toThrow();
    });
  });
});

describe('landing route lookup (landing/[slug].json.js logic)', () => {
  let lookup;

  beforeEach(() => {
    lookup = buildLandingLookup();
  });

  it('builds a non-empty lookup map', () => {
    expect(lookup.size).toBeGreaterThan(0);
  });

  it('contains a known group slug (forecourt-signs)', () => {
    expect(lookup.has('forecourt-signs')).toBe(true);
  });

  it('returns 200 and valid JSON for a known group slug', () => {
    const req = { params: { slug: 'forecourt-signs' } };
    const res = makeRes();

    if (lookup.has(req.params.slug)) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(lookup.get(req.params.slug));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Not found' }));
    }

    expect(res.statusCode).toBe(200);
    const parsed = JSON.parse(res.body);
    expect(parsed.slug).toBe('forecourt-signs');
  });

  it('returns 404 for an unknown group slug', () => {
    const req = { params: { slug: 'not-a-real-category' } };
    const res = makeRes();

    if (lookup.has(req.params.slug)) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(lookup.get(req.params.slug));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Not found' }));
    }

    expect(res.statusCode).toBe(404);
  });

  it('every value in the map is valid JSON', () => {
    lookup.forEach((value, key) => {
      expect(() => JSON.parse(value), `slug "${key}" has invalid JSON`).not.toThrow();
    });
  });
});
