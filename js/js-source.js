$(document).ready(() => {
    $("#slideshow .slick").slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear",
        rtl: true,
        autoplay: true,
        autoplayspeed: 2000
    });
});