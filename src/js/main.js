$(() => {
    $('.header__slider').slick({
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        nextArrow: $('.arrow_right'),
    });
})