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
  padding-bottom: 10  0px;
  width: 300px;
  height: auto;
}
#formatfont{
  font-size:0.8em;
  color: black;
}

.about, .contentbox{
  display: flex;
  align-items: center;
}
.about{
  width: 100%;
}
.contentbox{
  width: 80%;
}

.container{
  background-color: #F6F7F9;
}

.form-container{
  padding-left: 25%;
  padding-right: 25%;

}

#container{
  position: relative;
  text-align: center;
  color: white;
}

#about{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
}

@media screen and (max-width:992px) {
  .logo{
    width: 200px;
  }
  #formatfont{
    padding: 0 4% 0 4%;
    font-size: 0.7em;
  }

  #about{
  transform: translate(-50%, -85%);
}

@media screen and (max-width:820px) {
  #about{
  transform: translate(-50%, -100%);
}
}

@media screen and (max-width:800px) {
  #about{
  transform: translate(-50%, -80%);
}
.logo{
    display: none;
  } 
  #formatfont{
    padding: 0 10% 0 10%;
    font-size: 0.6em;
  }
  #section1{
  widows: 50%;
}
}

@media screen and (max-width:603px){
   #formatfont{
    padding: 5%;
  }
  #section1{
  widows: 50%;
}

#about{
  transform: translate(-50%, -80%);
}
}
}
</style>


<div class="section " id="section0">
  <section class="section-intro padding-y-sm">
    <div class="container" id="container">
    
    <div class="intro-banner-wrap">
      <img src="img/blurred.jpg" class="img-fluid rounded" style="height: 20em;
      width: 100%;
      margin-top: 100px;
      opacity: 0.3;" alt="Banner with company description">
    </div>
    
    </div> 
    </section>

   <ul class="about" id="about">
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
</ul> 
<!-- <ul class="about">
  <li class="contentbox">
  <img src="img/logo.png" alt="KBL Solutions Logo" class="logo">
    <h1 id="temp">
    Website being updated
    </h1>
  </li>
</ul> -->
</div>
<div class="section">
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
          </figure> 
        </div>
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
  </div>
  <br/>
  <div class="section" id="section20">
    <h1 class="pands" id="gone">Products and Services</h1>
    <Carousel />
  </div>  
<div class="form-container">
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

 
    
   
