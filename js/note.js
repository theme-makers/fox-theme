$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:1
        }
    }
})