<script>
  export let productName;
  export let productSize;
</script>

<div class="quote-card">
  <h3 class="quote-title">Request a Quote</h3>
  <form action="https://formspree.io/mrgljdow" method="POST" class="quote-form">
    <!-- Hidden product fields -->
    <input type="hidden" name="product" value="{productName}" />
    {#if productSize}
      <input type="hidden" name="product-size" value="{productSize}" />
    {/if}

    <div class="qf-field">
      <label for="qq-quantity">Quantity required</label>
      <input id="qq-quantity" type="text" name="Quantity" placeholder="e.g. 10" />
    </div>

    <div class="qf-checkboxes">
      <label class="qf-check-label">
        <input type="checkbox" value="Request Price" name="Request Price" class="qf-checkbox" />
        <span>Request a price</span>
      </label>
      <label class="qf-check-label">
        <input type="checkbox" value="More info" name="More info" class="qf-checkbox" />
        <span>Request more information</span>
      </label>
    </div>

    <div class="qf-field">
      <label for="qq-name">Your Name</label>
      <input id="qq-name" type="text" name="name" placeholder="Full name" required />
    </div>

    <div class="qf-field">
      <label for="qq-email">Email Address</label>
      <input id="qq-email" type="email" name="_replyto" placeholder="email@company.com" required />
    </div>

    <button type="submit" class="qf-submit">
      Send Quote Request
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
    </button>
  </form>
</div>

<style>
  .quote-card {
    background: var(--slate-50);
    border: 1px solid var(--slate-200);
    border-radius: var(--radius-2xl);
    padding: 1.75rem;
    margin-top: 2rem;
  }

  .quote-title {
    font-family: var(--font-heading);
    font-size: 1.0625rem;
    font-weight: 600;
    color: var(--slate-900);
    margin-bottom: 1.25rem;
  }

  .quote-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .qf-field {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
  }

  .qf-field label {
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--slate-700);
  }

  .qf-field input {
    padding: 0.625rem 0.875rem;
    border-radius: var(--radius-lg);
    border: 1px solid var(--slate-200);
    background: #fff;
    color: var(--slate-900);
    font-family: var(--font-sans);
    font-size: 0.875rem;
    outline: none;
    transition: border-color 0.15s, box-shadow 0.15s;
    width: 100%;
  }
  .qf-field input:focus {
    border-color: var(--brand-500);
    box-shadow: 0 0 0 3px rgba(30,154,214,0.12);
  }

  .qf-checkboxes {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .qf-check-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: var(--slate-700);
    cursor: pointer;
  }

  .qf-checkbox {
    width: 16px;
    height: 16px;
    accent-color: var(--brand-600);
    flex-shrink: 0;
    cursor: pointer;
  }

  .qf-submit {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    background: var(--brand-600);
    color: #fff;
    font-family: var(--font-sans);
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: var(--radius-xl);
    border: none;
    cursor: pointer;
    transition: background 0.15s, box-shadow 0.15s;
    box-shadow: 0 4px 12px rgba(18,123,181,0.2);
    margin-top: 0.25rem;
  }
  .qf-submit:hover {
    background: var(--brand-700);
    box-shadow: 0 6px 16px rgba(18,123,181,0.3);
  }
</style>
