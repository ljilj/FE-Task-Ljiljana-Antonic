/*** Hero Section ***/ 
$('.c-hero-slick-slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
    prevArrow: '.prevArrow',
    nextArrow: '.nextArrow'
});
  

/*** Slider2 Section ***/ 
$('.c-slick-slider2').slick({
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: '.prevArrow2',
    nextArrow: '.nextArrow2'
});


/*** Slider3 Section ***/ 
$('.c-slick-slider3').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.prevArrow3',
    nextArrow: '.nextArrow3',
    responsive: [
        {
            breakpoint: 1400,
            settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
             infinite: true
            } 
        }
    ]
});

/*** AOS ***/ 
AOS.init();