import { describe, it, expect } from 'vitest';
import products from '../routes/products/_products.js';

describe('products data', () => {
  it('exports a non-empty array', () => {
    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThan(0);
  });

  it('every group has a slug and name', () => {
    products.forEach(group => {
      expect(group.slug, `group missing slug`).toBeTruthy();
      expect(typeof group.slug).toBe('string');
      expect(group.name, `group "${group.slug}" missing name`).toBeTruthy();
      expect(typeof group.name).toBe('string');
    });
  });

  it('every group has at least one image', () => {
    products.forEach(group => {
      expect(Array.isArray(group.images), `group "${group.slug}" missing images array`).toBe(true);
      expect(group.images.length, `group "${group.slug}" has empty images`).toBeGreaterThan(0);
      group.images.forEach(img => {
        expect(img.src, `group "${group.slug}" has image without src`).toBeTruthy();
      });
    });
  });

  it('all top-level group slugs are unique', () => {
    const slugs = products.map(g => g.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it('every nested product has slug, name, and images', () => {
    products
      .filter(group => Array.isArray(group.products))
      .forEach(group => {
        expect(group.products.length, `group "${group.slug}" has empty products array`).toBeGreaterThan(0);
        group.products.forEach(product => {
          expect(product.slug, `product in group "${group.slug}" missing slug`).toBeTruthy();
          expect(typeof product.slug).toBe('string');
          expect(product.name, `product "${product.slug}" missing name`).toBeTruthy();
          expect(Array.isArray(product.images), `product "${product.slug}" missing images array`).toBe(true);
          expect(product.images.length, `product "${product.slug}" has empty images`).toBeGreaterThan(0);
        });
      });
  });

  it('all product slugs across the entire tree are unique', () => {
    const allSlugs = [];
    products.forEach(group => {
      if (Array.isArray(group.products)) {
        group.products.forEach(product => allSlugs.push(product.slug));
      } else {
        allSlugs.push(group.slug);
      }
    });
    const uniqueSlugs = new Set(allSlugs);
    const duplicates = allSlugs.filter((slug, i) => allSlugs.indexOf(slug) !== i);
    expect(duplicates, `Duplicate slugs found: ${duplicates.join(', ')}`).toHaveLength(0);
  });

  it('products with subprice have at least one non-empty price entry', () => {
    const allProducts = [];
    products.forEach(group => {
      if (Array.isArray(group.products)) {
        group.products.forEach(p => allProducts.push(p));
      } else {
        allProducts.push(group);
      }
    });

    allProducts
      .filter(p => Array.isArray(p.subprice) && p.subprice.length > 0)
      .forEach(product => {
        const hasAtLeastOnePrice = product.subprice.some(
          entry =>
            (entry.priceOpt1 && entry.priceOpt1.trim() !== '') ||
            (entry.priceOpt2 && entry.priceOpt2.trim() !== '') ||
            (entry.priceOpt3 && entry.priceOpt3.trim() !== '')
        );
        expect(hasAtLeastOnePrice, `product "${product.slug}" subprice entries all have empty prices`).toBe(true);
      });
  });

  it('prices start with £ and contain digits where present', () => {
    const pricePattern = /^£\d+(\.\d{1,2})?$/;
    const allProducts = [];
    products.forEach(group => {
      if (Array.isArray(group.products)) {
        group.products.forEach(p => allProducts.push(p));
      } else {
        allProducts.push(group);
      }
    });

    allProducts
      .filter(p => Array.isArray(p.subprice))
      .forEach(product => {
        product.subprice.forEach(entry => {
          ['priceOpt1', 'priceOpt2', 'priceOpt3'].forEach(key => {
            const price = entry[key];
            // Only validate entries that contain at least one digit (skip bare "£" or empty)
            if (price && /£\d/.test(price.trim())) {
              expect(
                pricePattern.test(price.trim()),
                `product "${product.slug}" has malformed price "${price}" in ${key}`
              ).toBe(true);
            }
          });
        });
      });
  });
});
