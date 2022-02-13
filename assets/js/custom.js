$(document).ready(function () {
    $('.on-silder').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        adaptiveHeight: true
      });
   
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    $('.video').venobox();

  
      $('.customer-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        fade:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
              dots:true,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
       /*================================
    slicknav
    ==================================*/

    $('.header-wrap .nav_mobile_menu').slicknav({
      label: '',
      duration: 1000,
      easingOpen: "easeOutBounce", //available with jQuery UI
      prependTo:'.mobile_menu',
      closedSymbol: '&#43;',
      openedSymbol: '&#8722;'
  });
});
