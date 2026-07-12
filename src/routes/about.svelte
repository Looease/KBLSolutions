<svelte:head>
  <title>About Us – KBL Solutions</title>
</svelte:head>

<section class="about-page">
  <div class="about-inner">

    <!-- Page header -->
    <div class="page-header">
      <span class="section-label">About KBL Solutions</span>
      <h1 class="page-title">Your trusted partner for professional display hardware.</h1>
    </div>

    <!-- 2-col content grid -->
    <div class="about-grid">

      <!-- Left: text -->
      <div class="about-text">
        <p>
          With over 16 years of POS experience working with top brands including
          Texaco, Esso, Kwik Fit, Dreams and Majestic Wine, our aim is to help you
          maximise your marketing efforts by supplying you with well-made products
          at great prices.
        </p>
        <p>
          We supply a wide range of Point of Sale products, not all of which appear
          on our web site. If you can't see what you're looking for give us a call —
          we are sure we will be able to help! If not, we may be able to put you in
          touch with someone that can.
        </p>
        <p>
          Need something bespoke? We can help with that too.
        </p>
        <p>
          We pride ourselves on our customer service, always going that little bit
          further to help — but don't just take our word for it, see what our
          customers are saying: <a href="/testimonials" class="text-link">read our testimonials</a>.
        </p>

        <ul class="about-list">
          <li>
            <svg class="list-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Point of Sale Products
          </li>
          <li>
            <svg class="list-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Competitive Prices
          </li>
          <li>
            <svg class="list-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Outstanding Customer Service
          </li>
          <li>
            <svg class="list-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Bespoke Manufacture
          </li>
        </ul>

        <a href="/#contact" class="btn-primary about-cta">
          Discuss your custom requirements
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>

      <!-- Right: feature cards + background image -->
      <div class="about-features">
        <div class="about-image-wrap">
          <img src="img/bandw.jpg" alt="KBL Solutions – years of B2B experience" class="about-image" />
          <div class="about-image-overlay" aria-hidden="true"></div>
          <div class="about-years-badge">
            <span class="ayb-number">16+</span>
            <span class="ayb-label">Years of POS Expertise</span>
          </div>
        </div>

        <div class="feature-cards">
          <div class="feature-card">
            <div class="fc-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <div>
              <h4 class="fc-title">Maximise Marketing Efforts</h4>
              <p class="fc-desc">High-impact display solutions designed to capture attention and elevate your brand presence in any environment.</p>
            </div>
          </div>

          <div class="feature-card">
            <div class="fc-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <h4 class="fc-title">Quality &amp; Reliability</h4>
              <p class="fc-desc">Our products are built to last, ensuring your marketing materials are displayed securely and professionally day after day.</p>
            </div>
          </div>

          <div class="feature-card">
            <div class="fc-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            </div>
            <div>
              <h4 class="fc-title">Dedicated B2B Support</h4>
              <p class="fc-desc">We work closely with businesses to understand their unique requirements, offering tailored advice and custom solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .about-page {
    padding: 4rem 1.5rem 5rem;
    background: #fff;
  }
  @media (min-width: 1024px) { .about-page { padding: 5rem 3rem 6rem; } }

  .about-inner {
    max-width: 1280px;
    margin: 0 auto;
  }

  .page-header {
    margin-bottom: 3.5rem;
    max-width: 48rem;
  }

  .page-title {
    font-family: var(--font-heading);
    font-size: clamp(1.875rem, 4vw, 2.75rem);
    font-weight: 700;
    color: var(--slate-900);
    line-height: 1.15;
    margin-top: 0.5rem;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: start;
  }
  @media (min-width: 1024px) {
    .about-grid { grid-template-columns: 1fr 1fr; gap: 4rem; }
  }

  /* Left text */
  .about-text p {
    font-size: 1rem;
    color: var(--slate-600);
    line-height: 1.75;
    margin-bottom: 1.125rem;
  }

  .about-list {
    margin: 1.75rem 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .about-list li {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--slate-700);
  }

  .list-check { color: var(--brand-500); flex-shrink: 0; }

  .about-cta { margin-top: 0.5rem; }

  /* Right: image + cards */
  .about-features { display: flex; flex-direction: column; gap: 1.5rem; }

  .about-image-wrap {
    position: relative;
    border-radius: var(--radius-2xl);
    overflow: hidden;
    aspect-ratio: 16/9;
  }

  .about-image {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
  }

  .about-image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(15,23,42,0.55), rgba(15,23,42,0.1));
  }

  .about-years-badge {
    position: absolute;
    bottom: 1.25rem;
    left: 1.25rem;
    display: flex;
    flex-direction: column;
  }

  .ayb-number {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 700;
    color: #fff;
    line-height: 1;
  }

  .ayb-label {
    font-size: 0.875rem;
    color: rgba(255,255,255,0.8);
    margin-top: 0.25rem;
  }

  /* Feature cards */
  .feature-cards { display: flex; flex-direction: column; gap: 1rem; }

  .feature-card {
    display: flex;
    gap: 1rem;
    padding: 1.25rem 1.5rem;
    border-radius: var(--radius-2xl);
    background: var(--slate-50);
    border: 1px solid var(--slate-100);
    transition: border-color 0.2s, background 0.2s;
  }
  .feature-card:hover {
    border-color: var(--brand-100);
    background: rgba(239,249,254,0.5);
  }

  .fc-icon {
    width: 48px; height: 48px;
    background: #fff;
    border: 1px solid var(--slate-200);
    border-radius: var(--radius-xl);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--brand-600);
    flex-shrink: 0;
    box-shadow: var(--shadow-sm);
  }

  .fc-title {
    font-family: var(--font-heading);
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--slate-900);
    margin-bottom: 0.375rem;
  }

  .fc-desc {
    font-size: 0.875rem;
    color: var(--slate-600);
    line-height: 1.6;
  }
</style>
