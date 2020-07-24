<script>
<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
        // this file is called [slug].svelte
		const res = await this.fetch(`..routes/products/_products${params.slug}.json`);
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

<section class="padding-bottom">
<div class="card card-body">
  <h4 class="title py-3">Quick quote request</h4>
  <form action="https://formspree.io/mrgljdow" method="POST" class="quickQuoteForm">
    <div class="form-group">
      <input class="form-control" name="{products.name}" value="{products.name}" type="text">
    </div>
    <div class="form-group">
      <div class="input-group">
        <input class="form-control" placeholder="Quantity" name="Quantity" type="text">
      </div>
    </div>
    <div class="form-group text-muted">
      <label class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" value="Request Price" name="Request Price">
        <div class="form-check-label">Request price</div>
      </label>
      <label class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" value="More info" name="More info">
        <div class="form-check-label">Request more information</div>
      </label>
    </div>
    <label>
      <input class="form-control" type="text" name="name" placeholder="Your Name">
    </label>
    <label>
      <input class="form-control" type="email" name="_replyto" placeholder="Your Email address">
    </label>
    <div class="form-group">
      <input class="btn  btn-primary"  type="submit" value="Send">
      <!-- <button class="btn btn-warning">Request for quote</button> -->
    </div>
  </form>
</div>
</section>
