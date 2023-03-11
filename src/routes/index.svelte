<script>
  import Carousel from '../components/Carousel.svelte'
</script>


<div class="section " id="section0">
  <section class="section-intro" id="section00">
    <div class="container" id="container">
    <div class="intro-banner-wrap">
      <img id="banner" class="img-fluid rounded" src="img/banner.png" style="height: 10%; width: auto" alt="Banner with company description: Marketing display products for all your business needs. Here at KBL, we aim to help you maximise your marketing efforts by supplying you with effective products at great prices. We supply a wider range of Point of Sale products than appear on our web site, so if you can’t see what you’re looking for, feel free to give us a call and we can walk you through your marketing requirements, where we are sure we will be able to help."/>
    </div>
    </div> 
  </section>
    <div class="section" id="section25">
        <span class="about-mobile" id="about">
  
            <img src="img/logo.png" alt="KBL Solutions Logo" class="mobile-logo"/>
          
          <h4 id="formatHeader">
          Marketing display products for all your business needs.
          </h4>
          <p id="formatfont"> 
          Here at KBL, we aim to help you maximise your marketing efforts by supplying you with effective
          products at great prices.
          We supply a wider range of Point of Sale products than appear on our web site, so if you can’t see
          what you’re looking for, feel free to give us a call and we can walk you through your marketing
          requirements, where we are sure we will be able to help.
          <br><br>
          Read more about us <a href="about" class= "point">here</a>
        </p>
        </span> 
</div>  
<div class="section" id="section20">
  <h1 class="products-and-services" id="gone">Products and Services</h1>
  <Carousel />
</div>  
<!-- <ul class="about">
  <li>
  <img src="img/logo.png" alt="KBL Solutions Logo" class="logo">
    <h1 id="temp">
    Website being updated
    </h1>
  </li>
</ul> -->
</div>
<div class="section" id="section1">
    <section class="section-content" id="section1">
      <div class="container">
      <article class="card card-body">
      <div class="row">
        <div class="col-md-4">	
          <figure class="item-feature">
            <span class="text-primary"><i class="fa fa-phone"></i></span>	
            <figcaption class="pt-3">
              <h5 class="title">Call us</h5>
              <p><a href="tel:+447894825001">+447894825001</a></p>
            </figcaption>
          </figure> 
        </div>
        <div class="col-md-4">
          <figure  class="item-feature">
            <span class="text-primary"><i class="fa fa-envelope"></i></span>	
            <figcaption class="pt-3">
              <h5 class="title">Email us</h5>
              <p><a href="mailto:sales@kblsolutions.co.uk">sales@kblsolutions.co.uk</a></p>
            </figcaption>
          </figure> 
        </div>
          <div class="col-md-4">
          <figure  class="item-feature">
            <span class="text-primary"><i class="fa fa-envelope"></i></span>
            <figcaption class="pt-3">
              <h5 class="title">Get in touch </h5>
              <p><a href="mailto:info@kblsolutions.co.uk">info@kblsolutions.co.uk</a></p>
            </figcaption>
          </figure> 
        </div> 
      </article>
      </div> 
      </section>  
  </div>
<div class="form-container" id="section2">
<div class="card mb-4">
  <div class="card-body">
    <header class="mb-4"><h4 class="card-title">Contact us</h4></header>
    <form action="https://formspree.io/mrgljdow" method="POST">
      <div class="col form-group">
      <label for="first name">First name</label>
        <input name="first-name" type="text" class="form-control" placeholder="">
    </div>
    <div class="col form-group">
      <label for="last name">Last name</label>
        <input name="last-name" type="text" class="form-control" placeholder="">
</div>
<div class="form-group">
  <label for="email">Email</label>
  <input type="text" name="email" class="form-control" placeholder="">
</div> 
<div class="form-group">
  <label for="subject">Subject </label>
  <input name="subject" type="text" class="form-control" placeholder="">
</div>
<div class="form-group">
  <label for="message">Message</label>
  <textarea name="message"  class="form-control" rows="3"></textarea>
</div>
<div class="form-group">
<button  class="btn btn-primary btn-block">Send</button>
  </form>
  </div> 
</div> 
</div> 

 
    
   
