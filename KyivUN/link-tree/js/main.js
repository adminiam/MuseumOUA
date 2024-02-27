/*-----------------------------------------------------------------------------------
/*
/* Main JS
/*
-----------------------------------------------------------------------------------*/

(function ($) {

    /*---------------------------------------------------- */
    /* Preloader
 ------------------------------------------------------ */
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

    var splide = new Splide( '#main-carousel', {
        pagination: false,
    } );


    var thumbnails = document.getElementsByClassName( 'thumbnail' );
    var current;


    for ( var i = 0; i < thumbnails.length; i++ ) {
        initThumbnail( thumbnails[ i ], i );
    }


    function initThumbnail( thumbnail, index ) {
        thumbnail.addEventListener( 'click', function () {
            splide.go( index );
        } );
    }


    splide.on( 'mounted move', function () {
        var thumbnail = thumbnails[ splide.index ];


        if ( thumbnail ) {
            if ( current ) {
                current.classList.remove( 'is-active' );
            }


            thumbnail.classList.add( 'is-active' );
            current = thumbnail;
        }
    } );
    splide.mount();

})(jQuery);