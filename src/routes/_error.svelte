<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
  <title>{status} – KBL Solutions</title>
</svelte:head>

<section class="error-page">
  <div class="error-inner">
    <span class="error-status">{status}</span>
    <h1 class="error-title">
      {status === 404 ? 'Page not found' : 'Something went wrong'}
    </h1>
    <p class="error-msg">
      {status === 404
        ? "The page you're looking for doesn't exist or has been moved."
        : error.message}
    </p>
    <div class="error-actions">
      <a href="/" class="btn-primary">Back to Home</a>
      <a href="/products/" class="btn-secondary">Browse Products</a>
    </div>
    {#if dev && error.stack}
      <pre class="error-stack">{error.stack}</pre>
    {/if}
  </div>
</section>

<style>
  .error-page {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    padding: 4rem 1.5rem;
    text-align: center;
  }

  .error-inner {
    max-width: 480px;
  }

  .error-status {
    display: block;
    font-family: var(--font-heading);
    font-size: 5rem;
    font-weight: 700;
    color: var(--brand-100);
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .error-title {
    font-family: var(--font-heading);
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--slate-900);
    margin-bottom: 0.875rem;
  }

  .error-msg {
    font-size: 1rem;
    color: var(--slate-600);
    line-height: 1.7;
    margin-bottom: 2rem;
  }

  .error-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
  }

  .error-stack {
    margin-top: 2rem;
    padding: 1rem;
    background: var(--slate-50);
    border: 1px solid var(--slate-200);
    border-radius: var(--radius-lg);
    font-size: 0.8125rem;
    color: var(--slate-600);
    text-align: left;
    overflow-x: auto;
    white-space: pre-wrap;
    word-break: break-all;
  }
</style>
