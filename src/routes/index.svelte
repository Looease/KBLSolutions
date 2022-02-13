<script>
  import Carousel from '../components/Carousel.svelte'
</script>

<style>

#text-area{
 width: 400px;
 height: 200px; 
 padding: 0px;
 margin: 0px;
 border: 1px solid #DADEE3;
}

#logo{
  width: 255px;
  left: 5%;
  height: auto;
  z-index: 100;
} 
#page-heading{
  padding-top: 125px;
  background-color: #44A4D9 !important;
}

@media screen and (max-width:603px){
  #logo{
  width: 300px;
} 
#section20{
    padding-top: 0px;
  }
#text-area{
  width: 100%;
}

}
</style>

 <div id="#section0"> 

  <section class="section-pagetop" id="page-heading">
    <div class="container">
      <h2 class="title-page text-white">KBL Solutions</h2>
      <h5>Marketing display products for all your business needs.</h5>
    
    </div> <!-- container //  -->
    </section>

    <section class="section-content padding-y-sm">
      <div class="container">
      <article class="card card-body">
      <div class="row">
        <div class="col-md-4">	
          <figure class="item-feature">
            
              <img src="img/logo.png" alt="KBL Solutions Logo" class="logo" id="logo">
          </figure> <!-- iconbox // -->
        </div><!-- col // -->
        <div class="col-md-4">
          <figure  class="item-feature">
            <span class="text-primary"><i class="fa fa-2x fa-landmark"></i></span>	
            <figcaption class="pt-3">
              <h5 class="title">Bespoke Strategy</h5>
              <p>
                Based on your marketing needs.
               </p>
            </figcaption>
          </figure> <!-- iconbox // -->
        </div><!-- col // -->
          <div class="col-md-4">
          <figure  class="item-feature">
            <span class="text-primary"><i class="fa fa-2x fa-truck"></i></span>
            <figcaption class="pt-3">
              <h5 class="title">Fast delivery</h5>
              <p>Fast delivery across the UK.</p>

            </figcaption>
          </figure> <!-- iconbox // -->
        </div> <!-- col // -->
      </div>
      </article>
      
      </div> <!-- container .//  -->
      </section>
 </div>
 <div class="section" id="section20">
  <h1 class="pands" id="gone">Products and Services</h1>
  <Carousel />
</div>

 <section class="section-content padding-y">
  <div class="container">
  <p>Here at KBL, we aim to help you maximise your marketing efforts by supplying you with effective
    products at great prices.
    We supply a wider range of Point of Sale products than appear on our web site, so if you can’t see
    what you’re looking for, feel free to give us a call and we can walk you through your marketing
    requirements, where we are sure we will be able to help.</p>
  <p>Read more about us <a href="about" class="point">here</a></p>
</div>
  <section class="section-content padding-y-sm">
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
        </figure> <!-- iconbox // -->
      </div><!-- col // -->
      <div class="col-md-4">
        <figure  class="item-feature">
          <span class="text-primary"><i class="fa fa-envelope"></i></span>	
          <figcaption class="pt-3">
            <h5 class="title">Email us</h5>
            <p><a href="mailto:sales@kblsolutions.co.uk">sales@kblsolutions.co.uk</a></p>
          </figcaption>
        </figure> <!-- iconbox // -->
      </div><!-- col // -->
        <div class="col-md-4">
        <figure  class="item-feature">
          <span class="text-primary"><i class="fa fa-envelope"></i></span>
          <figcaption class="pt-3">
            <h5 class="title">Get in touch </h5>
            <p><a href="mailto:info@kblsolutions.co.uk">info@kblsolutions.co.uk</a></p>
          </figcaption>
        </figure> <!-- iconbox // -->
      </div> <!-- col // -->
    </div>
    </article>
    
    </div> 
    </section>  
  </section>
    <div class="" id="section2"> 
      <div class="card mx-auto" style="max-width:520px; margin-top:40px;">
        <section class="section-name padding-y ">
        <article class="card-body">
      <header class="mb-4"><h4 class="card-title">Contact us</h4></header>
      <form action="https://formspree.io/mrgljdow" method="POST">
          <div class="form-row">
            <div class="col form-group">
              <label>First name</label>
                <input name="first-name" type="text" class="form-control" placeholder="">
            </div> <!-- form-group end.// -->
            <div class="col form-group">
              <label>Last name</label>
                <input name="last-name" type="text" class="form-control" placeholder="">
            </div> <!-- form-group end.// -->
          </div> <!-- form-row end.// -->
          <div class="form-group">
            <label>Email</label>
            <input name="email" type="email" class="form-control" placeholder="">
          </div> <!-- form-group end.// -->
          <div class="form-group">
            <label>Subject </label>
              <input name="subject" type="text" class="form-control" placeholder="">             
          </div>
          <div class="form-group">
            <label>Message</label>
              <textarea name="message"  id="text-area" placeholder=""></textarea>
          
          </div>
            <div class="form-group">                  
                    <input type="submit" value="Send" class="btn btn-primary btn-block">
                  </div> <!-- form-group// -->             
        </form>
      </article><!-- card-body.// -->
       </section>
      </div> 
      </div> 


   
