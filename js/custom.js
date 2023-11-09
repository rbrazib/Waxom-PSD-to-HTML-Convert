$ (function(){

   //  Stykey Header Start
   $(window).scroll(function(){
    var scrolling = $(this).scrollTop();

    if(scrolling > 200){
        $('.navbar').addClass('bg');
    }
    else {
         $('.navbar').removeClass('bg');
    }
    });
    //  Stykey Header End

     // Banner_part Slider Start
     $('.banner_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows:false,
    });
    // Banner_part Slider End

    //  Service_part Slider Start
    $('.service_slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows:false,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
      ]
    });
    // Service_part Slider End

    // Project_part Mixitup Start
    var containerEl = document.querySelector('.porject_main');
    var mixer = mixitup(containerEl);
    // Project_part Mixitup End

     // recent_part slick Start
     $('.recent_slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      centerMode:false,
      centerPadding:false,
      autoplaySpeed: 1000,
      arrows:false,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
      ]
    });
    // recent_part slick End

    // counter start
    $('.counter').counterUp({
        delay: 10,
        time: 10000
    });
    // counter End

    // Client Part Start

    $('.client_slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      centerMode:true,
      centerPadding:false,
      autoplaySpeed: 1000,
      arrows:false,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
      ]
    });
    // Client Part End

});