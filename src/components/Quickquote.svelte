<script>
  // This export enables you to pass 
  // props into components
	export let product;
</script>
asdasd
<section class="padding-bottom">
  <div class="card card-body">
    <h4 class="title py-3">Quick quote request</h4>
    <form action="https://formspree.io/mrgljdow" method="POST" class="quickQuoteForm">
      <div class="form-group">
        <input class="form-control" value="{product}" type="text">
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
