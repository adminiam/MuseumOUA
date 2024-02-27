import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css";
import Splide from "@splidejs/splide";


(function ($) {
    /*---------------------------------------------------- */
    /* Mobile Menu
 ------------------------------------------------------ */
    var toggle_button = $("<a>", {
            id: "toggle-btn",
            html: "Menu",
            title: "Menu",
            href: "#"
        }
    );
    var nav_wrap = $('nav#nav-wrap')
    var nav = $("ul#nav");

    /* id JS is enabled, remove the two a.mobile-btns
    and dynamically prepend a.toggle-btn to #nav-wrap */
    nav_wrap.find('a.mobile-btn').remove();
    nav_wrap.prepend(toggle_button);

    toggle_button.on("click", function (e) {
        e.preventDefault();
        nav.slideToggle("fast");
    });

    if (toggle_button.is(':visible')) nav.addClass('mobile');
    $(window).resize(function () {
        if (toggle_button.is(':visible')) nav.addClass('mobile');
        else nav.removeClass('mobile');
    });

    $('ul#nav li a').on("click", function () {
        if (nav.hasClass('mobile')) nav.fadeOut('fast');
    });


    /*----------------------------------------------------*/
    /* FitText Settings
    ------------------------------------------------------ */
    setTimeout(function () {

        $('h1.responsive-headline').fitText(1.2, {minFontSize: '25px', maxFontSize: '40px'});

    }, 100);


    /*----------------------------------------------------*/
    /* Smooth Scrolling
    ------------------------------------------------------ */
    $('.smoothscroll').on('click', function (e) {

        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
            window.location.hash = target;
        });

    });


    new Splide( '.splide' ).mount( window.splide.Extensions );

    document.addEventListener( 'DOMContentLoaded', function () {
        const sliderIds = ['#main-carousel', '#main-carousel1', '#main-carousel2', '#main-carousel3', '#main-carousel4', '#main-carousel5', '#main-carousel6', '#main-carousel7'];

        sliderIds.forEach((sliderId) => {
            new Splide(sliderId, {
                type      : 'fade',
                rewind    : true,
                pagination: false,
                arrows    : false,
            }).mount();
        });
        const thumbnailIds = ['#thumbnail-carousel', '#thumbnail-carousel1', '#thumbnail-carousel2', '#thumbnail-carousel3', '#thumbnail-carousel4', '#thumbnail-carousel5', '#thumbnail-carousel6', '#thumbnail-carousel7'];

        thumbnailIds.forEach((thumbnailId) => {
            new Splide(thumbnailId, {
                fixedWidth  : 100,
                fixedHeight : 60,
                gap         : 10,
                rewind      : true,
                pagination  : false,
                isNavigation: true,
                breakpoints : {
                    600: {
                        fixedWidth : 60,
                        fixedHeight: 44,
                    },
                },
            }).mount();
        });
    } );


})(jQuery);