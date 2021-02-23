<script>
  import Carousel from '../components/Carousel.svelte'
</script>

<style>
section{
  min-height: 100vh;
}
.logo{
  margin: 50px 0px 0px 0px;
  padding: 0px;
  width: 200px;
}
#formatfont{
  margin: 0px;
  font-size: 0.7em;
  color: black;
}

.about, .contentbox{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.arrow{
  list-style: none;
}
.fa-arrow-down{
 color: rgba(255, 255, 255, 0.5);
}
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


<div class="section " id="section0">
<!--About us Section -->
  <ul class="about">
    <li class="contentbox">
    <img src="img/logo.png" alt="KBL Solutions Logo" class="logo">
      <h4 id="formatfont">
      Marketing display products for all your business needs.
      <br>  <br>
      Covid-19 health and safety marketing solutions.
      <br>  <br>
      Here at KBL, we aim to help you maximise your marketing efforts by supplying you with effective
      products at great prices.
      We supply a wider range of Point of Sale products than appear on our web site, so if you can’t see
      what you’re looking for, feel free to give us a call and we can walk you through your marketing
      requirements, where we are sure we will be able to help.
      <br>
      Read more about us here <a href="about" class="point">here</a>
      </h4>
    </li>
    <li class="arrow">
    <div class="arrow bounce">
    <a class="fa fa-arrow-down fa-2x" href="/#section1">
    </a>
    </div>
    </li>
  </ul>
</div>
<!-- </div> -->
  <!-- Product Selector -->
    <div class="section" id="section1">
      <br>
      <h1 class="pands" id="gone">Products and Services</h1>
      <br>  <br>

      <Carousel />
    </div>
    <!-- Contact -->
      <div class="section" id="section2">
        <section class="section-name padding-y ">
          <ul class="formbox">
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
                <h1>sales@kblsolutions.co.uk</h1>
          </ul>
        </section>
      </div>
