$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.slider').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
            ],
    });
});
      