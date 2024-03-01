/*---------------------------------------------------------------------*/
/*Swiper slider*/
/*---------------------------------------------------------------------*/
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
/*---------------------------------------------------------------------*/


/*---------------------------------------------------------------------*/
/*Section appearance*/
/*---------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const config = {
        rootMargin: '0px',
        threshold: 0.5
    };

    let observer = new IntersectionObserver(function (entries, self) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, config);

    sections.forEach(section => {
        observer.observe(section);
    });
});
/*---------------------------------------------------------------------*/


/*---------------------------------------------------------------------*/
/*Animated text*/
/*---------------------------------------------------------------------*/
function checkWidth() {
    const textElement = document.getElementById('animated-text');

    if (!textElement) {
        return;
    }

    const screenWidth = window.innerWidth;

    if (screenWidth < 570) {
        textElement.style.whiteSpace = 'nowrap';
    } else {
        textElement.style.whiteSpace = 'normal';
    }
}

window.addEventListener('load', checkWidth);
window.addEventListener('resize', checkWidth);
/*---------------------------------------------------------------------*/






