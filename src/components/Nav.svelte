<script>
  import { onMount } from 'svelte';

  let scrollY = 0;
  let mobileOpen = false;
  let dropdownOpen = false;

  $: scrolled = scrollY > 20;

  function toggleMobile() {
    mobileOpen = !mobileOpen;
    if (mobileOpen) dropdownOpen = false;
  }

  function closeMobile() {
    mobileOpen = false;
    dropdownOpen = false;
  }

  function toggleDropdown(e) {
    e.preventDefault();
    dropdownOpen = !dropdownOpen;
  }

  const navLinks = [
    { name: 'About Us',      href: '/about' },
    { name: 'Testimonials',  href: '/testimonials' },
    { name: 'Contact',       href: '/#contact' },
  ];

  const productLinks = [
    { name: 'All Products & Services',    href: '/products/' },
    { name: 'Compact Privacy Screen',     href: '/products/compact-screen' },
    { name: 'Forecourt Signs',            href: '/products/landing/forecourt-signs' },
    { name: 'Aluminum A Boards',          href: '/products/a-board' },
    { name: 'Lockable Poster Cases',      href: '/products/landing/exterior-poster-case' },
    { name: 'Menu & Info Holders',        href: '/products/landing/menus' },
    { name: 'Snap Frames',                href: '/products/landing/snap-frames' },
    { name: 'Illuminated & LED Displays', href: '/products/landing/illuminated-display' },
    { name: 'Replacement Front Sheets',   href: '/products/replacement-front-sheet' },
  ];
</script>

<svelte:window bind:scrollY />

<header class="site-header">
  <!-- Utility bar -->
  <div class="utility-bar">
    <div class="utility-inner">
      <div class="utility-contacts">
        <a class="utility-link" href="tel:+447894825001">
          <svg class="icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          +44 7894 825001
        </a>
        <a class="utility-link" href="mailto:info@kblsolutions.co.uk">
          <svg class="icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          info@kblsolutions.co.uk
        </a>
      </div>
      <span class="utility-tagline">B2B Marketing Display &amp; POS Specialists</span>
    </div>
  </div>

  <!-- Main nav -->
  <div class="main-nav" class:scrolled>
    <div class="nav-inner">
      <!-- Logo -->
      <a class="nav-logo" href="/" on:click={closeMobile} aria-label="KBL Solutions home">
        <img src="img/logo.png" alt="KBL Solutions" />
      </a>

      <!-- Desktop links -->
      <nav class="desktop-nav" aria-label="Main navigation">
        <a class="nav-link" href="/about">About Us</a>

        <!-- Products dropdown -->
        <div class="dropdown" class:open={dropdownOpen}>
          <button class="nav-link dropdown-toggle" on:click={toggleDropdown} aria-expanded={dropdownOpen}>
            Products &amp; Services
            <svg class="chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          {#if dropdownOpen}
          <div class="dropdown-menu" on:mouseleave={() => dropdownOpen = false}>
            {#each productLinks as link}
              <a class="dropdown-item" href={link.href} on:click={() => dropdownOpen = false}>{link.name}</a>
            {/each}
          </div>
          {/if}
        </div>

        <a class="nav-link" href="/testimonials">Testimonials</a>
        <a class="nav-link" href="/#contact">Contact</a>
        <a class="btn-cta" href="/#contact">Get a Quote</a>
      </nav>

      <!-- Hamburger -->
      <button class="hamburger" on:click={toggleMobile} aria-label="Toggle menu" aria-expanded={mobileOpen}>
        {#if mobileOpen}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        {:else}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile menu -->
  {#if mobileOpen}
  <nav class="mobile-nav" aria-label="Mobile navigation">
    <a class="mobile-link" href="/" on:click={closeMobile}>Home</a>
    <a class="mobile-link" href="/about" on:click={closeMobile}>About Us</a>
    <button class="mobile-link mobile-dropdown-toggle" on:click={toggleDropdown}>
      Products &amp; Services
      <svg class="chevron" class:flipped={dropdownOpen} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
    </button>
    {#if dropdownOpen}
    <div class="mobile-sub">
      {#each productLinks as link}
        <a class="mobile-sub-link" href={link.href} on:click={closeMobile}>{link.name}</a>
      {/each}
    </div>
    {/if}
    <a class="mobile-link" href="/testimonials" on:click={closeMobile}>Testimonials</a>
    <a class="mobile-link" href="/#contact" on:click={closeMobile}>Contact</a>
    <div class="mobile-cta-wrap">
      <a class="btn-cta" href="/#contact" on:click={closeMobile}>Get a Quote</a>
    </div>
  </nav>
  {/if}
</header>

<style>
  /* ---- Utility bar ---- */
  .site-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    flex-direction: column;
  }

  .utility-bar {
    background: var(--slate-900);
    color: var(--slate-300);
    font-size: 0.8125rem;
  }

  .utility-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0.5rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .utility-contacts {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .utility-link {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    color: var(--slate-300);
    text-decoration: none;
    transition: color 0.15s;
  }
  .utility-link:hover { color: #fff; }

  .utility-tagline {
    color: var(--slate-500);
    font-size: 0.8125rem;
    display: none;
  }
  @media (min-width: 640px) { .utility-tagline { display: block; } }

  /* ---- Main nav ---- */
  .main-nav {
    background: rgba(255,255,255,0.97);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s, box-shadow 0.2s, padding 0.2s;
    padding: 1.125rem 0;
  }
  .main-nav.scrolled {
    border-color: var(--slate-200);
    box-shadow: var(--shadow-sm);
    padding: 0.625rem 0;
  }

  .nav-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  .nav-logo img {
    height: 80px;
    width: auto;
    display: block;
  }

  /* ---- Desktop nav ---- */
  .desktop-nav {
    display: none;
    align-items: center;
    gap: 0.25rem;
  }
  @media (min-width: 768px) { .desktop-nav { display: flex; } }

  .nav-link {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--slate-600);
    padding: 0.375rem 0.625rem;
    border-radius: var(--radius-md);
    text-decoration: none;
    transition: color 0.15s, background 0.15s;
    background: none;
    cursor: pointer;
    font-family: var(--font-sans);
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
  }
  .nav-link:hover { color: var(--brand-600); background: var(--slate-50); }

  /* ---- Dropdown ---- */
  .dropdown { position: relative; }

  .dropdown-toggle { border: none; }

  .chevron {
    transition: transform 0.2s;
    flex-shrink: 0;
  }
  .dropdown.open .chevron,
  .chevron.flipped { transform: rotate(180deg); }

  .dropdown-menu {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    background: #fff;
    border: 1px solid var(--slate-200);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-xl);
    min-width: 240px;
    overflow: hidden;
    z-index: 200;
  }

  .dropdown-item {
    display: block;
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
    color: var(--slate-700);
    text-decoration: none;
    transition: background 0.15s, color 0.15s;
  }
  .dropdown-item:hover {
    background: var(--brand-50);
    color: var(--brand-600);
  }
  .dropdown-item + .dropdown-item {
    border-top: 1px solid var(--slate-100);
  }

  /* ---- CTA button ---- */
  .btn-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1.125rem;
    background: var(--brand-600);
    color: #fff;
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: var(--radius-lg);
    text-decoration: none;
    transition: background 0.15s;
    box-shadow: var(--shadow-sm);
    margin-left: 0.375rem;
  }
  .btn-cta:hover { background: var(--brand-700); }

  /* ---- Hamburger ---- */
  .hamburger {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.375rem;
    border-radius: var(--radius-md);
    color: var(--slate-600);
    transition: background 0.15s, color 0.15s;
    background: none;
    border: none;
    cursor: pointer;
  }
  .hamburger:hover { background: var(--slate-100); color: var(--slate-900); }
  @media (min-width: 768px) { .hamburger { display: none; } }

  /* ---- Mobile nav ---- */
  .mobile-nav {
    background: #fff;
    border-bottom: 1px solid var(--slate-200);
    box-shadow: var(--shadow-lg);
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 768px) { .mobile-nav { display: none; } }

  .mobile-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.875rem 1.5rem;
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--slate-700);
    text-decoration: none;
    border-top: 1px solid var(--slate-100);
    background: none;
    cursor: pointer;
    font-family: var(--font-sans);
    transition: color 0.15s, background 0.15s;
  }
  .mobile-link:hover { color: var(--brand-600); background: var(--slate-50); }

  .mobile-dropdown-toggle {
    width: 100%;
    text-align: left;
    border: none;
  }

  .mobile-sub {
    background: var(--slate-50);
    border-top: 1px solid var(--slate-100);
  }

  .mobile-sub-link {
    display: block;
    padding: 0.625rem 2rem;
    font-size: 0.875rem;
    color: var(--slate-600);
    text-decoration: none;
    border-top: 1px solid var(--slate-100);
    transition: color 0.15s;
  }
  .mobile-sub-link:hover { color: var(--brand-600); }

  .mobile-cta-wrap {
    padding: 1rem 1.5rem 1.25rem;
    border-top: 1px solid var(--slate-100);
  }
  .mobile-cta-wrap .btn-cta {
    width: 100%;
    margin-left: 0;
    padding: 0.75rem;
    font-size: 0.9375rem;
    border-radius: var(--radius-xl);
  }
</style>
