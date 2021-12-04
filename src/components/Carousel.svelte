<script>
    import Carousel from '@beyonk/svelte-carousel'
    import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons'
</script>

<style>
    span{
      color: #2C86D2;
    }
    .carousel {
        width: 75%;
        height: 75%;
        margin-left: auto;
        margin-right: auto;
    }
    .slide-content {
        margin: 20px;
        height: 60vh;
        text-align: center;
        font-size: 18px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .slide-content:hover{
      box-shadow: 2px 2px 12px rgba(47,47,47,0.40);
      transform: scale(1.03);
      transition: all ease 0.3s;
    }
    .slide-content p, .cart{
      padding: 20px 10px 20px 10px;
      color: #2C86D2;
    }
    .slide-content img{
      height: auto;
      display: block;
      max-width: 100%;
      max-height: 275px;
      -o-object-fit: cover;
      object-fit: cover;
      cursor: pointer;
    }

</style>

<div class="carousel">
    <Carousel perPage={{  900: 3, 650: 2, 500: 1 }}>

        <span class="control" slot="left-control">
            <ChevronLeftIcon />
        </span>


        <div class="slide-content">
            <p class="time">Compact Privacy Screen</p>
            <a href="/products/compact-screen">
            <img src="img/sign/compact/42.jpg" alt="" class="img-box">
            <br>
            <div class="cart">
                Find out more
            </div>
            </a>
        </div> 
          <div class="slide-content">
              <p class="time">Forecourt/Pavement Signs</p>
              <a href="/products/landing/forecourt-signs">
                  <img src="img/sign/forecourt/26.jpg" alt="" class="img-box">
                  <div class="cart">
                      Find out more
                  </div>
              </a>
          </div>

        <div class="slide-content">
            <p class="time">A-Board Pavement Sign</p>
            <a href="/products/a-board">
            <img src="img/sign/aboard/2.jpg" alt="" class="img-box" id="correct">
            <div class="cart">
                Find out more
            </div>
            </a>
        </div>

        <div class="slide-content">
            <p class="time">Lockable Poster Cases</p>
            <a href="/products/landing/exterior-poster-case">
            <img src="img/sign/lockposter/5.jpg" alt="" class="img-box" id="correct">
            <div class="cart">
                Find out more
            </div>
            </a>
        </div>

        <div class="slide-content">
            <p class="time">Menu / Floor Displays/ Info Holders</p>
            <a href="/products/landing/menus">
            <img src="img/sign/menu/31.jpg" alt="" class="img-box">
            <div class="cart">
            Find out more
            </div>
            </a>
        </div>

        <div class="slide-content">
            <p class="time">Snap Frames</p>
            <a href="products/landing/snap-frames">
            <img src="img/sign/snap/38.jpg" alt="" class="img-box">
            <div class="cart">
                Find out more
            </div>
            </a>
        </div>

        <div class="slide-content">
            <p class="time">Illuminated and LED Displays</p>
            <a href="/products/landing/illuminated-display">
            <img src="img/sign/illuminated/45.jpg" alt="" class="img-box">
            <div class="cart">
                Find out more
            </div>
            </a>
        </div>
        <span class="control" slot="right-control">
            <ChevronRightIcon />
        </span>

    </Carousel>
</div>
