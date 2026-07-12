<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`products/${params.slug}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { product: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let product;

  import { onMount } from 'svelte';
  import Quickquote from '../../components/Quickquote.svelte';

  let selected;
  let featureImgEl;

  onMount(() => {
    if (product.images && product.images.length > 1) {
      const thumbnails = document.querySelectorAll('.thumb-img');
      thumbnails.forEach(img => {
        img.addEventListener('click', () => {
          if (featureImgEl) featureImgEl.src = img.src;
        });
      });
    }
  });
</script>

<svelte:head>
  <title>{product.name} – KBL Solutions</title>
</svelte:head>

<section class="detail-page">
  <div class="detail-inner">

    <!-- Breadcrumb -->
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/products/">Products</a>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      <span>{product.name}</span>
    </nav>

    <!-- 2-col layout -->
    <div class="detail-grid">

      <!-- Left: image gallery -->
      <div class="gallery-col">
        <div class="gallery-main">
          {#if product.images}
            <img
              bind:this={featureImgEl}
              src={product.images[0].src}
              alt={product.images[0].alt}
              class="gallery-feature-img"
            />
          {/if}
        </div>

        {#if product.images && product.images.length > 1}
          <div class="gallery-thumbs">
            {#each product.images as { src, alt }}
              <button class="thumb-btn" on:click={() => { if (featureImgEl) featureImgEl.src = src; }} aria-label="View image">
                <img {src} {alt} class="thumb-img" />
              </button>
            {/each}
          </div>
        {/if}
      </div>

      <!-- Right: product info + quote -->
      <div class="info-col">
        <h1 class="product-title">{product.name}</h1>

        {#if product.teaser}
          <p class="product-teaser">{product.teaser}</p>
        {/if}

        {#if product.features}
          <ul class="features-list">
            {#each product.features as feature}
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="check-icon"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                {feature}
              </li>
            {/each}
          </ul>
        {/if}

        <!-- Variant selector -->
        {#if product.subprice}
          <div class="variant-section">
            <h4 class="variant-label">Select an option:</h4>
            <select bind:value={selected} class="variant-select">
              {#each product.subprice as option}
                <option value={option}>{option.text}</option>
              {/each}
            </select>

            {#if selected}
              <div class="price-grid">
                {#if selected.quantityOpt1}
                  <div class="price-item">
                    <span class="price-qty">{selected.quantityOpt1} units</span>
                    <span class="price-val">{selected.priceOpt1}</span>
                  </div>
                {/if}
                {#if selected.quantityOpt2}
                  <div class="price-item">
                    <span class="price-qty">{selected.quantityOpt2} units</span>
                    <span class="price-val">{selected.priceOpt2}</span>
                  </div>
                {/if}
                {#if selected.quantityOpt3}
                  <div class="price-item">
                    <span class="price-qty">{selected.quantityOpt3} items</span>
                    <span class="price-val">{selected.priceOpt3}</span>
                  </div>
                {/if}
              </div>
            {/if}
          </div>
        {:else}
          <div class="price-display">
            {#if product.price}
              <span class="price-label">Price</span>
              <span class="price-value">£{product.price}</span>
            {:else}
              <span class="price-enquire">Contact us for pricing &amp; availability</span>
            {/if}
          </div>
        {/if}

        <!-- Quote form -->
        <Quickquote
          productName={product.name}
          productSize={selected ? selected.text : ''}
        />
      </div>
    </div>

    <!-- Description + Specs below -->
    <div class="detail-lower">

      {#if product.description}
        <div class="detail-section">
          <h2 class="detail-section-title">Description</h2>
          <p class="detail-desc">{product.description}</p>
        </div>
      {/if}

      {#if product.downloads && product.downloads.length > 0}
        <div class="detail-section">
          <h2 class="detail-section-title">Downloads</h2>
          <ul class="downloads-list">
            {#each product.downloads as { name, file }}
              <li>
                <a href={file} class="download-link" target="_blank" rel="noopener">
                  <span class="dl-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
                  </span>
                  {name}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/if}

      {#if product.specifications && product.specifications.length > 0}
        <div class="detail-section">
          <h2 class="detail-section-title">Specifications</h2>
          <table class="specs-table">
            <tbody>
              {#each product.specifications as { label, value }}
                {#if label}
                  <tr>
                    <th>{label}</th>
                    <td>{value || '—'}</td>
                  </tr>
                {/if}
              {/each}
            </tbody>
          </table>
        </div>
      {/if}
    </div>

  </div>
</section>

<style>
  .detail-page {
    padding: 3rem 1.5rem 5rem;
    background: #fff;
    min-height: 80vh;
  }
  @media (min-width: 1024px) { .detail-page { padding: 4rem 3rem 6rem; } }

  .detail-inner { max-width: 1280px; margin: 0 auto; }

  /* Breadcrumb */
  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 0.875rem;
    color: var(--slate-500);
    margin-bottom: 2rem;
  }
  .breadcrumb a {
    color: var(--brand-600);
    text-decoration: none;
    transition: color 0.15s;
  }
  .breadcrumb a:hover { color: var(--brand-700); }

  /* 2-col grid */
  .detail-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    align-items: start;
    margin-bottom: 3.5rem;
  }
  @media (min-width: 768px) {
    .detail-grid { grid-template-columns: 1fr 1fr; gap: 3rem; }
  }

  /* Gallery */
  .gallery-col {}

  .gallery-main {
    background: var(--slate-50);
    border: 1px solid var(--slate-200);
    border-radius: var(--radius-2xl);
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 280px;
    margin-bottom: 1rem;
  }

  .gallery-feature-img {
    max-width: 100%;
    max-height: 320px;
    object-fit: contain;
    display: block;
  }

  .gallery-thumbs {
    display: flex;
    gap: 0.625rem;
    flex-wrap: wrap;
  }

  .thumb-btn {
    background: var(--slate-50);
    border: 1px solid var(--slate-200);
    border-radius: var(--radius-lg);
    padding: 0.375rem;
    cursor: pointer;
    transition: border-color 0.15s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .thumb-btn:hover { border-color: var(--brand-400); }

  .thumb-img {
    width: 56px;
    height: 56px;
    object-fit: contain;
    display: block;
  }

  /* Info column */
  .info-col {}

  .product-title {
    font-family: var(--font-heading);
    font-size: clamp(1.5rem, 3.5vw, 2.125rem);
    font-weight: 700;
    color: var(--slate-900);
    margin-bottom: 0.875rem;
    line-height: 1.2;
  }

  .product-teaser {
    font-size: 1rem;
    color: var(--slate-600);
    line-height: 1.7;
    margin-bottom: 1.25rem;
  }

  .features-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .features-list li {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    font-size: 0.9375rem;
    color: var(--slate-700);
    line-height: 1.5;
  }

  .check-icon { color: var(--brand-500); flex-shrink: 0; margin-top: 2px; }

  /* Variant selector */
  .variant-section { margin-bottom: 0; }

  .variant-label {
    font-family: var(--font-heading);
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--slate-900);
    margin-bottom: 0.625rem;
  }

  .variant-select {
    width: 100%;
    max-width: 260px;
    padding: 0.625rem 0.875rem;
    border-radius: var(--radius-lg);
    border: 1px solid var(--slate-200);
    background: #fff;
    color: var(--slate-900);
    font-family: var(--font-sans);
    font-size: 0.9375rem;
    outline: none;
    cursor: pointer;
    transition: border-color 0.15s;
    margin-bottom: 1rem;
  }
  .variant-select:focus { border-color: var(--brand-500); }

  .price-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 0.5rem;
  }

  .price-item {
    display: flex;
    flex-direction: column;
    background: var(--brand-50);
    border: 1px solid var(--brand-100);
    border-radius: var(--radius-xl);
    padding: 0.75rem 1rem;
    min-width: 100px;
  }

  .price-qty {
    font-size: 0.75rem;
    color: var(--slate-500);
    margin-bottom: 0.25rem;
  }

  .price-val {
    font-family: var(--font-heading);
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--brand-600);
  }

  /* Simple price display */
  .price-display {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-bottom: 0.5rem;
  }

  .price-label {
    font-size: 0.8125rem;
    color: var(--slate-500);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .price-value {
    font-family: var(--font-heading);
    font-size: 2rem;
    font-weight: 700;
    color: var(--brand-600);
  }

  .price-enquire {
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--slate-600);
    font-style: italic;
  }

  /* Lower sections */
  .detail-lower {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding-top: 2.5rem;
    border-top: 1px solid var(--slate-100);
  }

  .detail-section {}

  .detail-section-title {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--slate-900);
    margin-bottom: 1rem;
    padding-bottom: 0.625rem;
    border-bottom: 2px solid var(--brand-100);
    display: inline-block;
  }

  .detail-desc {
    font-size: 1rem;
    color: var(--slate-600);
    line-height: 1.75;
    max-width: 56rem;
  }

  /* Downloads */
  .downloads-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  .download-link {
    display: inline-flex;
    align-items: center;
    gap: 0.625rem;
    font-size: 0.9375rem;
    color: var(--brand-600);
    text-decoration: none;
    transition: color 0.15s;
  }
  .download-link:hover { color: var(--brand-700); }

  .dl-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px; height: 36px;
    background: var(--brand-50);
    border: 1px solid var(--brand-100);
    border-radius: var(--radius-md);
    flex-shrink: 0;
  }

  /* Specs table */
  .specs-table {
    width: 100%;
    max-width: 640px;
    border-collapse: collapse;
    font-size: 0.9375rem;
  }

  .specs-table tr {
    border-bottom: 1px solid var(--slate-100);
  }
  .specs-table tr:last-child { border-bottom: none; }

  .specs-table th {
    text-align: left;
    padding: 0.75rem 1rem 0.75rem 0;
    font-weight: 600;
    color: var(--slate-700);
    width: 40%;
    vertical-align: top;
    font-family: var(--font-sans);
  }

  .specs-table td {
    padding: 0.75rem 0;
    color: var(--slate-600);
    vertical-align: top;
  }
</style>
