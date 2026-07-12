<script>
  import products from './_products.js';

  function getPath(group) {
    return !!group.products ? `/products/landing/${group.slug}` : `/products/${group.slug}`;
  }
</script>

<svelte:head>
  <title>Products &amp; Services – KBL Solutions</title>
</svelte:head>

<section class="products-page">
  <div class="products-inner">

    <!-- Page header -->
    <div class="products-header">
      <div class="products-header-text">
        <span class="section-label">Our Range</span>
        <h1 class="page-title">Products and Services</h1>
        <p class="products-desc">
          A selection of our most popular marketing display products.
          We supply a much wider range than shown here — just get in touch.
        </p>
      </div>
      <a href="tel:+447894825001" class="btn-ghost products-call-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
        Call for full catalogue
      </a>
    </div>

    <!-- Product grid -->
    <div class="prod-grid">
      {#each products as group}
        <a href={getPath(group)} class="prod-card">
          <div class="prod-img-wrap">
            <img src={group.images[0].src} alt={group.images[0].alt} />
          </div>
          <div class="prod-body">
            <h2 class="prod-name">{group.name}</h2>
            {#if group.teaser}
              <p class="prod-teaser">{group.teaser}</p>
            {/if}
            <span class="prod-link">View range →</span>
          </div>
        </a>
      {/each}

      <!-- CTA card -->
      <div class="prod-card prod-cta-card">
        <div class="prod-cta-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
        </div>
        <h2 class="prod-cta-title">Looking for something else?</h2>
        <p class="prod-cta-desc">We supply hundreds of POS products not listed online. Let us know what you need.</p>
        <a href="tel:+447894825001" class="prod-cta-btn">Call Us Now</a>
      </div>
    </div>

  </div>
</section>

<style>
  .products-page {
    padding: 4rem 1.5rem 5rem;
    background: var(--slate-50);
    min-height: 80vh;
  }
  @media (min-width: 1024px) { .products-page { padding: 5rem 3rem 6rem; } }

  .products-inner { max-width: 1280px; margin: 0 auto; }

  .products-header {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-bottom: 3rem;
  }
  @media (min-width: 768px) {
    .products-header {
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
      gap: 2rem;
    }
  }

  .page-title {
    font-family: var(--font-heading);
    font-size: clamp(1.875rem, 4vw, 2.5rem);
    font-weight: 700;
    color: var(--slate-900);
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .products-desc {
    font-size: 1.0625rem;
    color: var(--slate-600);
    max-width: 36rem;
  }

  .products-call-btn { flex-shrink: 0; }

  /* Grid */
  .prod-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  @media (min-width: 480px) { .prod-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 900px) { .prod-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (min-width: 1200px) { .prod-grid { grid-template-columns: repeat(4, 1fr); } }

  /* Product card */
  .prod-card {
    background: #fff;
    border: 1px solid var(--slate-200);
    border-radius: var(--radius-2xl);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    transition: box-shadow 0.25s, transform 0.2s, border-color 0.2s;
  }
  .prod-card:hover {
    box-shadow: var(--shadow-xl);
    border-color: var(--slate-300);
    transform: translateY(-2px);
  }

  .prod-img-wrap {
    aspect-ratio: 4/3;
    background: var(--slate-100);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .prod-img-wrap img {
    max-width: 85%;
    max-height: 85%;
    object-fit: contain;
    transition: transform 0.4s;
  }
  .prod-card:hover .prod-img-wrap img { transform: scale(1.05); }

  .prod-body {
    padding: 1.125rem 1.25rem 1.25rem;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .prod-name {
    font-family: var(--font-heading);
    font-size: 1rem;
    font-weight: 600;
    color: var(--slate-900);
    margin-bottom: 0.375rem;
    transition: color 0.15s;
    line-height: 1.3;
  }
  .prod-card:hover .prod-name { color: var(--brand-600); }

  .prod-teaser {
    font-size: 0.8125rem;
    color: var(--slate-500);
    line-height: 1.55;
    flex: 1;
    margin-bottom: 0.875rem;
  }

  .prod-link {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--brand-600);
  }

  /* CTA card */
  .prod-cta-card {
    background: var(--brand-600);
    border-color: var(--brand-500);
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem 1.5rem;
    gap: 0.75rem;
    cursor: default;
  }
  .prod-cta-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 40px rgba(18,123,181,0.2);
  }

  .prod-cta-icon {
    width: 64px; height: 64px;
    background: rgba(255,255,255,0.12);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin-bottom: 0.5rem;
  }

  .prod-cta-title {
    font-family: var(--font-heading);
    font-size: 1.0625rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 0.5rem;
  }

  .prod-cta-desc {
    font-size: 0.875rem;
    color: rgba(255,255,255,0.8);
    line-height: 1.6;
    margin-bottom: 1.25rem;
  }

  .prod-cta-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.75rem;
    background: #fff;
    color: var(--brand-600);
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: var(--radius-xl);
    text-decoration: none;
    transition: background 0.15s;
  }
  .prod-cta-btn:hover { background: var(--slate-50); }
</style>
