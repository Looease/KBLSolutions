<script>
  import Carousel from '../components/Carousel.svelte'
</script>

<style>
section{
  min-height: 100vh;
}
#temp{
  color: #000;
  font-weight: 1000;
}
.logo{
  margin: 50px 0px 0px 0px;
  padding: 0px;
  width: 250px;
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
@media screen and (max-width:992px) {
  .logo{
    width: 150px;
  }
  #formatfont{
    padding: 0px 20px 0px 20px;
    font-size: 0.7em;
  }
}
@media screen and (max-width:603px){
  .logo{
    display: none;
  }
  #formatfont{
    padding: 25% 12% 15% 12%;
  }

}
</style>

<!-- <div class="section"> -->
<!-- <div class="section " id="section0"> -->
  <!-- <ul class="about">
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
      <br>
      Read more about us here <a href="about" class="point">here</a>
      </h4>
    </li> -->
    

    <!-- <li class="arrow">
    <div class="arrow bounce">
    <a class="fa fa-arrow-down fa-2x" href="/#section1">
    </a>
    </div>
    </li>
  </ul>
</div>
    <div class="section" id="section1">
      <br>
      <br>  <br> -->

    
    <!-- </div>
    <div class="section" id="section20">
      <h1 class="pands" id="gone">Products and Services</h1>
      <Carousel />
    </div> -->
    
      <div class="section" id="section2">
        <section class="section-name padding-y ">
          <ul class="about">
            <li class="contentbox">
            <img src="img/logo.png" alt="KBL Solutions Logo" class="logo">
              <h1 id="temp">
              Website being updated
              </h1>
            </li>
          </ul>
          <!-- <ul class="formbox">
              <form action="https://formspree.io/mrgljdow" method="POST" class="indexForm">
                <h1>Contact Us</h1>
                  <label>
                    <input type="text" name="name" placeholder="Your Name">
                  </label>
                  <label>
                    <input type="phone" name="number" placeholder="Your Contact Number">
                  </label>
                  <label>
                    <input type="email" name="_replyto" placeholder="Your Email address">
                  </label>
                  <br>
                  <label>
                    <input type="text" name="subject" placeholder="Subject">      
                  </label>
                  <label>
                    <textarea name="message" placeholder="Message"></textarea>
                  </label>
                  <br>  <br>
                  <input type="submit" value="Send" class="button">
                </form>
                <br>
          </ul> -->
          <h3>Call us:</h3> 
          <h3><a href="tel:+447894825001">+447894825001</a></h3>
          <br>
          <h3>Email us:</h3> 
          <h3><a href="mailto:sales@kblsolutions.co.uk">sales@kblsolutions.co.uk</a></h3>
          <h3><a href="mailto:info@kblsolutions.co.uk">info@kblsolutions.co.uk</a></h3>
        </section>
      </div>
