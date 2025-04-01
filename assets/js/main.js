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
    spaceBetween: 10,
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

function initVideoPlayers() {
    var backgroundVideo = document.getElementById('background-video');
    if (backgroundVideo) {
        backgroundVideo.removeAttribute('data-youtube-id');
    }

    var videos = document.querySelectorAll('video');
    for (var i = 0; i < videos.length; i++) {
        var videoId = videos[i].getAttribute('data-youtube-id');
        if (videos[i] !== backgroundVideo) { // Проверка, чтобы не инициализировать фоновое видео
            videojs(videos[i], {
                fluid: true,
                techOrder: ['youtube'],
                controls: true,
                nativeControlsForTouch: false,
                sources: [{
                    src: 'https://www.youtube.com/watch?v=' + videoId,
                    type: 'video/youtube'
                }],
            });
        }
    }
}

if (window.addEventListener) {
    window.addEventListener('load', initVideoPlayers, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', initVideoPlayers);
}

document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('background-video');
    video.play().catch(function (error) {
        // Автозапуск может быть заблокирован, ждем взаимодействия с пользователем
        document.body.addEventListener('click', function () {
            video.play();
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('mainpage-header');
    const overlayMisc = document.getElementById('overlay_misc');

    window.addEventListener('scroll', function () {
        if (window.scrollY > overlayMisc.offsetHeight) {
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.opacity = '1';
        } else {
            header.style.opacity = '0';
            setTimeout(() => {
                if (window.scrollY <= overlayMisc.offsetHeight) {
                    header.style.position = 'absolute';
                    header.style.top = '0';
                }
            }, 500);
        }
    });

    header.style.position = 'absolute';
    header.style.top = '0';
    header.style.opacity = '0';
});
document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('lang-selector-toggle');
    const langDropdown = document.getElementById('lang-dropdown');
    const langOptions = document.querySelectorAll('.language-option');
    const currentLang = document.querySelector('.current-language');
    const currentLangImg = currentLang.querySelector('.flag-icon');
    const currentLangName = currentLang.querySelector('.language-name');
    langToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
    });
    document.addEventListener('click', function(e) {
        if (!langDropdown.contains(e.target) && !langToggle.contains(e.target)) {
            langDropdown.classList.remove('show');
        }
    });

});








