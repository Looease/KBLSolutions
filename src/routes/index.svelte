<script>
  import Carousel from '../components/Carousel.svelte'
</script>

<style>
section{
 padding: 0;
}

#section1{
  widows: 100%;
}
/* #temp{
  color: #000;
  font-weight: 1000;
} */
.logo{
  padding: 0px;
  width: 300px;
  height: auto;
}
#formatfont{
  font-size:0.8em;
  color: black;
}

.about, .contentbox{
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* .arrow{
  list-style: none;
}
.fa-arrow-down{
 color: rgba(255, 255, 255, 0.5);
} */

#temp{
  padding-bottom: 10%;
}
@media screen and (max-width:992px) {
  .logo{
    width: 200px;
  }
  #formatfont{
    padding: 0 4% 0 4%;
    font-size: 0.7em;
  }

}
@media screen and (max-width:603px){
  .logo{
    display: none;
  } 
   #formatfont{
    padding: 5%;
  }
  #section1{
  widows: 50%;
}
}
</style>

 <!-- <div class="section">  -->
<div class="section " id="section0">
  <ul class="about">
    <li class="contentbox">
    <img src="img/logo.png" alt="KBL Solutions Logo" class="logo">
      <h4 id="formatfont">
      Marketing display products for all your business needs.
      <br>  <br>
      Here at KBL, we aim to help you maximise your marketing efforts by supplying you with effective
      products at great prices.
      We supply a wider range of Point of Sale products than appear on our web site, so if you can’t see
      what you’re looking for, feel free to give us a call and we can walk you through your marketing
      requirements, where we are sure we will be able to help.
      <br><br>
      Read more about us <a href="about" class="point">here</a>
      </h4>
    </li> 

    <section class="section-content padding-y-sm" id="section1">
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
    
        <br>  <br>
      </article>

      </div> 
      </section>  
  
  
  </ul>
  <div class="section" id="section20">
    <h1 class="pands" id="gone">Products and Services</h1>
    <Carousel />
  </div> 
</div>

 
    
    <div class="section" id="section2">
      <section class="section-name padding-y ">
      <article class="card-body">
    <header class="mb-4"><h4 class="card-title">Contact us</h4></header>
    <form action="https://formspree.io/mrgljdow" method="POST">
        <div class="form-row">
          <div class="col form-group">
            <label for="first name">First name</label>
              <input name="first-name" type="text" class="form-control" placeholder="">
          </div> <!-- form-group end.// -->
          <div class="col form-group">
            <label for="last name">Last name</label>
              <input name="last-name" type="text" class="form-control" placeholder="">
          </div> <!-- form-group end.// -->
        </div> <!-- form-row end.// -->
        <div class="form-group">
          <label for="email">Email</label>
          <input name="email" type="email" class="form-control" placeholder="">
        </div> <!-- form-group end.// -->
        <div class="form-group">
          <label for="subject">Subject </label>
            <input name="subject" type="text" class="form-control" placeholder="">             
        </div>
        <div class="form-group">
          <label for="message">Message</label>
            <textarea name="message"  id="text-area" placeholder=""></textarea>

        </div>
          <div class="form-group">                  
                  <input type="submit" value="Send" class="btn btn-primary btn-block">
                </div> <!-- form-group// -->             
      </form>
    </article><!-- card-body.// -->
     </section>
    </div> 
