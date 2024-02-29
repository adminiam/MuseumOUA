
(function($) {
  	/*---------------------------------------------------- */
  	/* Mobile Menu
   ------------------------------------------------------ */  
  	var toggle_button = $("<a>", {                         
                        id: "toggle-btn", 
                        html : "Menu",
                        title: "Menu",
                        href : "#" } 
                        );
  	var nav_wrap = $('nav#nav-wrap')
  	var nav = $("ul#nav");  

  	/* id JS is enabled, remove the two a.mobile-btns 
  	and dynamically prepend a.toggle-btn to #nav-wrap */
  	nav_wrap.find('a.mobile-btn').remove(); 
  	nav_wrap.prepend(toggle_button); 

  	toggle_button.on("click", function(e) {
   	e.preventDefault();
    	nav.slideToggle("fast");     
  	});

  	if (toggle_button.is(':visible')) nav.addClass('mobile');
  	$(window).resize(function(){
   	if (toggle_button.is(':visible')) nav.addClass('mobile');
    	else nav.removeClass('mobile');
  	});

  	$('ul#nav li a').on("click", function(){      
   	if (nav.hasClass('mobile')) nav.fadeOut('fast');      
  	});


  	/*----------------------------------------------------*/
  	/* FitText Settings
  	------------------------------------------------------ */
  	setTimeout(function() {

   	$('h1.responsive-headline').fitText(1.2, { minFontSize: '25px', maxFontSize: '40px' });

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

	var swiper = new Swiper(".mySwiper", {
		loop: true,
		spaceBetween: 10,
		slidesPerView: 5,
		freeMode: true,
		watchSlidesProgress: true,
	});
	var swiper = new Swiper(".mySwiper2", {
		loop: true,
		spaceBetween: 10,
		navigation:{
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs:{
			swiper: swiper,
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


})(jQuery);