<svelte:head>
  <title>Testimonials – KBL Solutions</title>
</svelte:head>

<section class="testi-page">
  <div class="testi-inner">

    <!-- Page header -->
    <div class="testi-header">
      <span class="section-label">Testimonials</span>
      <h1 class="page-title">Trusted by businesses across the UK</h1>
      <p class="testi-intro">Don't just take our word for it. Here's what our clients have to say about our products and service.</p>
    </div>

    <!-- Testimonials grid -->
    <div class="testi-grid">

      <div class="testi-card">
        <div class="testi-stars" aria-label="5 stars">
          {#each Array(5) as _}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          {/each}
        </div>
        <svg class="testi-quote-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
        <blockquote class="testi-quote">
          "We have worked with KBL Solutions on more than one occasion and have always found them to be
          very efficient, easy to communicate with and very reliable whilst meeting difficult deadlines.
          We will continue to work with them on future projects. Would highly recommend."
        </blockquote>
        <div class="testi-author">
          <div class="testi-avatar">C</div>
          <div>
            <p class="testi-name">Commercial Project &amp; Supply Chain Controller</p>
            <p class="testi-company">Astley</p>
          </div>
        </div>
      </div>

      <div class="testi-card">
        <div class="testi-stars" aria-label="5 stars">
          {#each Array(5) as _}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          {/each}
        </div>
        <svg class="testi-quote-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
        <blockquote class="testi-quote">
          "KBL are always there to help and on numerous occasions has helped with last minute orders delivered with great speed."
        </blockquote>
        <div class="testi-author">
          <div class="testi-avatar">H</div>
          <div>
            <p class="testi-name">Head of Store Design and Development</p>
            <p class="testi-company">JD Outdoor</p>
          </div>
        </div>
      </div>

      <div class="testi-card">
        <div class="testi-stars" aria-label="5 stars">
          {#each Array(5) as _}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          {/each}
        </div>
        <svg class="testi-quote-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
        <blockquote class="testi-quote">
          "KBL Solutions delivered a brilliant service when we needed a very quick turnaround on an order.
          Great communication, efficient delivery and excellent quality product. Highly recommend Karen,
          will definitely be using KBL Solutions going forward."
        </blockquote>
        <div class="testi-author">
          <div class="testi-avatar">M</div>
          <div>
            <p class="testi-name">Managing Director</p>
            <p class="testi-company">Sip It</p>
          </div>
        </div>
      </div>

      <div class="testi-card">
        <div class="testi-stars" aria-label="5 stars">
          {#each Array(5) as _}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          {/each}
        </div>
        <svg class="testi-quote-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
        <blockquote class="testi-quote">
          "I have found KBL Solutions to be a great company to work with, speedy responses, competitive prices
          supplying us with good quality products. Any issues are dealt with quickly and professionally.
          They couldn't be more helpful."
        </blockquote>
        <div class="testi-author">
          <div class="testi-avatar">P</div>
          <div>
            <p class="testi-name">Project Support Coordinator</p>
            <p class="testi-company">Dreams</p>
          </div>
        </div>
      </div>

      <div class="testi-card">
        <div class="testi-stars" aria-label="5 stars">
          {#each Array(5) as _}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          {/each}
        </div>
        <svg class="testi-quote-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
        <blockquote class="testi-quote">
          "I'm always happy to work with Karen at KBL. They are friendly, approachable and good communicators.
          They provide a prompt service. Keep up the good work!"
        </blockquote>
        <div class="testi-author">
          <div class="testi-avatar">T</div>
          <div>
            <p class="testi-name">Client</p>
            <p class="testi-company">Topps Tiles</p>
          </div>
        </div>
      </div>

      <div class="testi-card">
        <div class="testi-stars" aria-label="5 stars">
          {#each Array(5) as _}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          {/each}
        </div>
        <svg class="testi-quote-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
        <blockquote class="testi-quote">
          "Having worked with KBL Solutions for several years we have always found Karen very helpful and efficient.
          Very quick turnaround times for orders and communication throughout is exceptional."
        </blockquote>
        <div class="testi-author">
          <div class="testi-avatar">I</div>
          <div>
            <p class="testi-name">Inventory Administrator</p>
            <p class="testi-company">Tate Business Group</p>
          </div>
        </div>
      </div>

      <div class="testi-card">
        <div class="testi-stars" aria-label="5 stars">
          {#each Array(5) as _}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          {/each}
        </div>
        <svg class="testi-quote-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
        <blockquote class="testi-quote">
          "We have always found Karen @ KBL Solutions to be extremely helpful and efficient with any orders
          we place with her. The service we receive is second-to-none."
        </blockquote>
        <div class="testi-author">
          <div class="testi-avatar">M</div>
          <div>
            <p class="testi-name">Buying Team</p>
            <p class="testi-company">Majestic Wines</p>
          </div>
        </div>
      </div>

    </div>

    <!-- CTA -->
    <div class="testi-cta">
      <p class="testi-cta-text">Ready to experience the KBL difference?</p>
      <a href="/#contact" class="btn-primary">Get in Touch</a>
    </div>

  </div>
</section>

<style>
  .testi-page {
    padding: 4rem 1.5rem 5rem;
    background: #fff;
  }
  @media (min-width: 1024px) { .testi-page { padding: 5rem 3rem 6rem; } }

  .testi-inner { max-width: 1280px; margin: 0 auto; }

  .testi-header {
    text-align: center;
    max-width: 42rem;
    margin: 0 auto 3.5rem;
  }

  .page-title {
    font-family: var(--font-heading);
    font-size: clamp(1.875rem, 4vw, 2.75rem);
    font-weight: 700;
    color: var(--slate-900);
    line-height: 1.15;
    margin-top: 0.5rem;
    margin-bottom: 0.75rem;
  }

  .testi-intro {
    font-size: 1.0625rem;
    color: var(--slate-600);
    line-height: 1.7;
  }

  /* Grid */
  .testi-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin-bottom: 3.5rem;
  }
  @media (min-width: 640px) { .testi-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1024px) { .testi-grid { grid-template-columns: repeat(3, 1fr); } }

  /* Card */
  .testi-card {
    position: relative;
    background: var(--slate-50);
    border: 1px solid var(--slate-100);
    border-radius: var(--radius-2xl);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0;
    transition: box-shadow 0.2s, border-color 0.2s;
  }
  .testi-card:hover {
    box-shadow: var(--shadow-lg);
    border-color: var(--slate-200);
  }

  .testi-stars {
    display: flex;
    gap: 0.2rem;
    margin-bottom: 1.25rem;
  }
  .star { color: var(--brand-500); }

  .testi-quote-icon {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    color: var(--brand-100);
    width: 40px; height: 40px;
  }

  .testi-quote {
    font-size: 0.9375rem;
    color: var(--slate-700);
    line-height: 1.75;
    flex: 1;
    margin-bottom: 1.75rem;
    font-style: normal;
    position: relative;
    z-index: 1;
  }

  .testi-author {
    display: flex;
    align-items: center;
    gap: 0.875rem;
    border-top: 1px solid var(--slate-200);
    padding-top: 1.25rem;
  }

  .testi-avatar {
    width: 40px; height: 40px;
    border-radius: 50%;
    background: var(--brand-100);
    color: var(--brand-700);
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 0.9375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .testi-name {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--slate-900);
    font-family: var(--font-heading);
  }

  .testi-company {
    font-size: 0.75rem;
    color: var(--slate-500);
    margin-top: 0.125rem;
  }

  /* CTA bar */
  .testi-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    text-align: center;
  }

  .testi-cta-text {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--slate-900);
  }
</style>
