//Full page slider

// var myFullpage = new fullpage('#fullpage', {
//     licenseKey: '182D844B-B4404C78-B0BA8961-A73EAF67',
//     verticalCentered: false,
//     navigation: true,
//     css3:false
// });


//Product slider

var swiper = new Swiper('.swiper-container', {
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
