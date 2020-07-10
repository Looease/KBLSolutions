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
  font-size: 0.8em;
}
.contentbox{
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (max-width:992px) {
  .logo{
    width: 175px;
  }
  #formatfont{
    padding: 0px 20px 0px 20px;
    font-size: 0.7em;
  }
}
</style>


<div class="section " id="section0">
<!--About us Section -->
  <ul class="about">
    <li class="contentbox">
    <img src="img/logo.png" alt="KBL Solutions Logo" class="logo">
      <h4 id="formatfont">Here at KBL, we aim to help you maximise your Marketing efforts by supplying you with good quality
products at competitive prices.
We supply a wide range of Point of Sale products, so many in fact that not all appear on our web site,
so if you can’t see what you’re looking for give us a call, we are sure we will be able to help!<br>
    <br>
        Read more about us <a href="about" class="point">here</a>
      </h4>
    </li>
  </ul>
<!-- </div> -->
  <!-- Product Selector -->
    <div class="section" id="section1">
      <br>
      <h1 class="pands" id="gone">Products and Services</h1>
      <br>
      <!-- Swiper -->
       <div class="swiper-container">
         <div class="swiper-wrapper">
           <div class="swiper-slide">
             <p class="time">Forecourt/Pavement Signs</p>
             <a href="forecourt.html">
             <img src="img/sign/forecourt/26.jpg" alt="" class="img-box"></a>
               <div class="cart">
                 <a href="forecourt.html">Find out more</a>
               </div>
           </div>
           <div class="swiper-slide">
             <p class="time">Covid 19</p>
             <a href="covid19.html">
             <img src="img/sign/covid/48.jpg" alt="" class="img-box"></a>
               <div class="cart">
                 <a href="covid19.html">Find out more</a>
               </div>
           </div>
           <div class="swiper-slide">
             <p class="time">Compact Privacy Screen</p>
             <a href="compact.html">
             <img src="img/sign/compact/42.jpg" alt="" class="img-box"></a>
               <div class="cart">
                 <a href="compact.html">Find out more</a>
               </div>
           </div>
           <div class="swiper-slide">
             <p class="time">A-Board Pavement Sign</p>
             <a href="aboard.html">
             <img src="img/sign/aboard/2.jpg" alt="" class="img-box" id="correct"></a>
               <div class="cart">
                 <a href="aboard.html">Find out more</a>
               </div>
           </div>
           <div class="swiper-slide">
             <p class="time">Lockable Poster Cases</p>
             <a href="lockposter.html">
             <img src="img/sign/lockposter/5.jpg" alt="" class="img-box" id="correct"></a>
               <div class="cart">
                 <a href="lockposter.html">Find out more</a>
               </div>
           </div>
           <div class="swiper-slide">
             <p class="time">Menu / Floor Standing Displays / Info Holders</p>
             <a href="menuselect.html">
             <img src="img/sign/menu/31.jpg" alt="" class="img-box"></a>
               <div class="cart">
                 <a href="menuselect.html">Find out more</a>
               </div>
           </div>
           <div class="swiper-slide">
             <p class="time">Snap Frames</p>
             <a href="snapframe.html">
             <img src="img/sign/snap/38.jpg" alt="" class="img-box"></a>
               <div class="cart">
                 <a href="snapframe.html">Find out more</a>
               </div>
           </div>
           <div class="swiper-slide">
             <p class="time">Replacement Front Sheets</p>
             <a href="replacement.html">
             <img src="img/sign/frontsheet/.jpg" alt="" class="img-box"></a>
               <div class="cart">
                 <a href="replacement.html">Find out more</a>
               </div>
           </div>
           <div class="swiper-slide">
             <p class="time">Illuminated Displays</p>
             <a href="illuminated.html">
             <img src="img/sign/illuminated/45.jpg" alt="" class="img-box"></a>
               <div class="cart">
                 <a href="illuminated.html">Find out more</a>
               </div>
           </div>
           <div class="swiper-slide">
             <p class="time">Roller Banners</p>
             <a href="rollerbanner.html">
             <img src="img/sign/covid/56.jpg" alt="" class="img-box"></a>
               <div class="cart">
                 <a href="rollerbanner.html">Find out more</a>
               </div>
           </div>
         </div>
         <!-- Add Pagination -->
         <div class="swiper-pagination"></div>
         <!-- Add Arrows -->
         <div class="swiper-button-next"></div>
         <div class="swiper-button-prev"></div>
       </div>
    </div>
  </div>
    <!-- Contact -->
      <div class="section" id="section2">
        <section class="section-name padding-y ">
          <ul class="formbox">
            <li class="forminfo">
              <form action="https://formspree.io/mrgljdow" method="POST" class="homeform">
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
                  <label>
                    <input type="text" name="subject" placeholder="Subject">
                    <textarea name="message" placeholder="Message"></textarea>
                  </label>
                  <input type="submit" value="Send" class="button">
                </form>
            </li>
          </ul>
        </section>
      </div>
