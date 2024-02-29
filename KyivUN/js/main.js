var swiperThumb = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiperMainCarousel = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiperThumb,
    },
});
var swiperCarousel = new Swiper(".mySwiper3", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
var swiperFourSlides = new Swiper(".mySwiper-4-slides", {
    spaceBetween: 10,
    slidesPerView: 4
});
var swiperThreeSlides = new Swiper(".mySwiper-3-slides", {
    spaceBetween: 10,
    slidesPerView: 3
});


