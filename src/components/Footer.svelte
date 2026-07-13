<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-grid">
      <!-- Brand column -->
      <div class="footer-brand">
        <a href="/" class="footer-logo-link" aria-label="KBL Solutions home">
          <span class="footer-logo-bg">
            <img src="img/logo.png" alt="KBL Solutions" />
          </span>
        </a>
        <p class="footer-desc">
          KBL Solutions is your trusted B2B partner for premium marketing display products,
          point-of-sale hardware, and custom signage solutions across the UK.
        </p>
      </div>

      <!-- Quick links -->
      <div class="footer-col">
        <h4 class="footer-heading">Quick Links</h4>
        <ul class="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/products/">Products &amp; Services</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </div>

      <!-- Legal -->
      <div class="footer-col">
        <h4 class="footer-heading">Legal</h4>
        <ul class="footer-links">
          <li><a href="/terms">Terms &amp; Conditions</a></li>
          <li><a href="/returns-policy">Returns Policy</a></li>
          <li><a href="/terms">Privacy Policy</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="footer-col">
        <h4 class="footer-heading">Contact</h4>
        <ul class="footer-links">
          <li><a href="mailto:info@kblsolutions.co.uk">info@kblsolutions.co.uk</a></li>
          <li><a href="mailto:sales@kblsolutions.co.uk">sales@kblsolutions.co.uk</a></li>
          <li><a href="tel:+447894825001">+44 7894 825001</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {new Date().getFullYear()} KBL Solutions Ltd. All rights reserved.</p>
      <p class="footer-sub">Designed for B2B Excellence.</p>
    </div>
  </div>
</footer>

<style>
  .site-footer {
    background: var(--slate-950);
    color: var(--slate-400);
    padding: 4rem 0 2rem;
    border-top: 1px solid rgba(255,255,255,0.06);
  }

  .footer-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    margin-bottom: 3rem;
  }
  @media (min-width: 640px) {
    .footer-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (min-width: 1024px) {
    .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; }
  }

  .footer-brand {}

  .footer-logo-link {
    display: inline-flex;
    margin-bottom: 1rem;
  }

  .footer-logo-bg {
    background: #fff;
    border-radius: var(--radius-lg);
    padding: 0.625rem 0.875rem;
    display: flex;
    align-items: center;
  }
  .footer-logo-bg img {
    height: 36px;
    width: auto;
    display: block;
  }

  .footer-desc {
    font-size: 0.875rem;
    line-height: 1.7;
    color: var(--slate-400);
    max-width: 22rem;
  }

  .footer-col {}

  .footer-heading {
    font-family: var(--font-heading);
    font-size: 0.875rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 1rem;
  }

  .footer-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  .footer-links li a {
    font-size: 0.875rem;
    color: var(--slate-400);
    text-decoration: none;
    transition: color 0.15s;
  }
  .footer-links li a:hover { color: var(--brand-400); }

  .footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.07);
    padding-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.375rem;
    text-align: center;
    font-size: 0.8125rem;
    color: var(--slate-500);
  }
  @media (min-width: 640px) {
    .footer-bottom {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }
  }

  .footer-sub { color: var(--slate-600); }
</style>
