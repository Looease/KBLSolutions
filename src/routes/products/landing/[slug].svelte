<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`products/landing/${params.slug}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { group: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let group;
</script>

<svelte:head>
  <title>{group.name} – KBL Solutions</title>
</svelte:head>

<section class="landing-page">
  <div class="landing-inner">

    <!-- Breadcrumb -->
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/products/">Products</a>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      <span>{group.name}</span>
    </nav>

    <!-- Page header -->
    <div class="landing-header">
      <span class="section-label">Product Range</span>
      <h1 class="page-title">{group.name}</h1>
      {#if group.teaser}
        <p class="landing-desc">{group.teaser}</p>
      {/if}
    </div>

    <!-- Products grid -->
    <div class="landing-grid">
      {#each group.products as product}
        <a href="/products/{product.slug}" class="lp-card">
          <div class="lp-img-wrap">
            <img src={product.images[0].src} alt={product.images[0].alt} />
          </div>
          <div class="lp-body">
            <h2 class="lp-name">{product.name}</h2>
            {#if product.price}
              <p class="lp-price">£{product.price}</p>
            {:else}
              <p class="lp-price-contact">Contact for pricing</p>
            {/if}
            <span class="lp-link">View product →</span>
          </div>
        </a>
      {/each}
    </div>

    <!-- Footer CTA -->
    <div class="landing-footer">
      <p class="lf-text">Can't find what you're looking for?</p>
      <div class="lf-actions">
        <a href="tel:+447894825001" class="btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          Call Us
        </a>
        <a href="/#contact" class="btn-secondary">Send a Message</a>
      </div>
    </div>

  </div>
</section>

<style>
  .landing-page {
    padding: 3rem 1.5rem 5rem;
    background: var(--slate-50);
    min-height: 80vh;
  }
  @media (min-width: 1024px) { .landing-page { padding: 4rem 3rem 6rem; } }

  .landing-inner { max-width: 1280px; margin: 0 auto; }

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

  /* Header */
  .landing-header {
    margin-bottom: 3rem;
    max-width: 44rem;
  }

  .page-title {
    font-family: var(--font-heading);
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 700;
    color: var(--slate-900);
    margin-top: 0.5rem;
    margin-bottom: 0.625rem;
  }

  .landing-desc {
    font-size: 1.0625rem;
    color: var(--slate-600);
    line-height: 1.7;
  }

  /* Grid */
  .landing-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin-bottom: 3.5rem;
  }
  @media (min-width: 480px) { .landing-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 900px) { .landing-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (min-width: 1200px) { .landing-grid { grid-template-columns: repeat(4, 1fr); } }

  /* Card */
  .lp-card {
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
  .lp-card:hover {
    box-shadow: var(--shadow-xl);
    border-color: var(--slate-300);
    transform: translateY(-2px);
  }

  .lp-img-wrap {
    aspect-ratio: 4/3;
    background: var(--slate-100);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .lp-img-wrap img {
    max-width: 85%;
    max-height: 85%;
    object-fit: contain;
    transition: transform 0.4s;
  }
  .lp-card:hover .lp-img-wrap img { transform: scale(1.05); }

  .lp-body {
    padding: 1.125rem 1.25rem 1.25rem;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .lp-name {
    font-family: var(--font-heading);
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--slate-900);
    margin-bottom: 0.375rem;
    line-height: 1.3;
    transition: color 0.15s;
  }
  .lp-card:hover .lp-name { color: var(--brand-600); }

  .lp-price {
    font-size: 1.125rem;
    font-weight: 600;
    font-family: var(--font-heading);
    color: var(--brand-600);
    margin-bottom: 0.75rem;
  }

  .lp-price-contact {
    font-size: 0.8125rem;
    color: var(--slate-500);
    margin-bottom: 0.75rem;
    font-style: italic;
  }

  .lp-link {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--brand-600);
    margin-top: auto;
  }

  /* Footer */
  .landing-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    text-align: center;
    padding: 3rem 1.5rem;
    background: #fff;
    border: 1px solid var(--slate-200);
    border-radius: var(--radius-2xl);
  }

  .lf-text {
    font-family: var(--font-heading);
    font-size: 1.1875rem;
    font-weight: 600;
    color: var(--slate-900);
  }

  .lf-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
  }
</style>
