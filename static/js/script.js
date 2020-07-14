
//Nav Scroll//

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 185 || document.documentElement.scrollTop > 185) {
document.getElementById("navbar").style.padding = "20px 0px 0px 0px";
document.getElementById("navbar").style.background="rgba(255,255,255,0.4)";
// rgba(246, 192, 178, 0.6)

} else {
document.getElementById("navbar").style.padding = "0px 0px 0px 0px";
document.getElementById("navbar").style.background="transparent";
}
}

//Close Nav//

function closeNav() {
  event.stopPropagation()

  var x = document.getElementById("navLink");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};



//Product slider

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  loopFillGroupWithBlank: true,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
        },
  breakpoints: {
    501: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    750: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});

//Anchor Pages

function thumbChange(num) {
  var thumb = 'img/sign/aboard/' + num + '.jpg';
  document.getElementById('mainImage').src = thumb;
};
