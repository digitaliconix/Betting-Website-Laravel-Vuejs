
jQuery(document).ready(function() {
  jQuery("#formButton").click(function() {
    jQuery("#form1").toggle();
  });
});



jQuery(function() {
jQuery(".testi-load-item-5").slice(0, 6).show();
jQuery("#testi-Load-More-3").on('click', function(e) {
e.preventDefault();
console.log('button working');
jQuery(".testi-load-item-5:hidden").slice(0, 3).slideDown();
if (jQuery(".testi-load-item-5:hidden").length == 0) {
// jQuery("#load-item-5").fadeOut('slow');
jQuery("#testi-Load-More-3").addClass('disabled');
}
jQuery(window).scrollTop(jQuery(window).scrollTop() + 1).scrollTop(jQuery(window).scrollTop() - 1);
});
});


    jQuery(window).load(function() {
  //      jQuery("#winner-carousel").owlCarousel({
  //       padding : 23,
  //       items : 3,
  //       loop: true,
  //       lazyLoad : true,
  //       slideSpeed : 2000,
		// paginationSpeed :2000,
		// lazyLoad : true,
		// stopOnHover : true,
		// autoPlay : true,
		// pagination: false,
		// navigation: true,
		// itemsDesktop : [1186,3], //5 items between 1000px and901px
		// itemsDesktopSmall : [900,2], // betweem 900px and 601px
		// itemsTablet: [414,1], //2 items between 600 and 0
		// itemsMobile : [400,1], // itemsMobile disabled - inherit from itemsTablet option
  //     });


jQuery("#winner-carousel").owlCarousel({
      	padding: 23,
     	loop: true,
        autoplay: true, //Set AutoPlay to 3 seconds
     	autoplayTimeout:8000,
     	autoplaySpeed: 2000,
    	autoplayHoverPause:true,
     	nav: true,
     	dots: false,
        items : 3,
    responsiveClass:true,
    responsive:{

        0:{

            items:1,
            nav:false
        },
        600:{

            items:1,
            nav:true
        },
        900:{

            items:2,
            nav:true,
            loop:true
        },
         1200:{

            items:3,
            nav:true,
            loop:true
        }
    }
      });

    });


    jQuery(window).load(function() {
	jQuery("#events-carousel").owlCarousel({
      	margin: 25,
     	loop: true,
        autoplay: true, //Set AutoPlay to 3 seconds
     	autoplayTimeout:8000,
     	autoplaySpeed: 2000,
    	autoplayHoverPause:true,
     	nav: false,
     	dots: false,
        items : 3,
    responsiveClass:true,
    responsive:{

        0:{

            items:1,
            nav:false
        },
        767:{

            items:2,
            nav:false
        },
        992:{

            items:3,
            nav:false,
            loop:true
        }
    }
      });

    });


   jQuery(window).load(function() {
	jQuery("#events2-carousel").owlCarousel({
      	margin: 25,
     	loop: true,
        autoplay: true, //Set AutoPlay to 3 seconds
     	autoplayTimeout:8000,
     	autoplaySpeed: 2000,
    	autoplayHoverPause:true,
     	nav: false,
     	dots: false,
        items : 3,
    responsiveClass:true,
    responsive:{

        0:{

            items:1,
            nav:false
        },
        767:{

            items:2,
            nav:false
        },
        992:{

            items:3,
            nav:false,
            loop:true
        }
    }
      });

    });


    jQuery(window).load(function() {

jQuery("#blog-carousel").owlCarousel({
      	margin: 25,
     	loop: true,
        autoplay: true, //Set AutoPlay to 3 seconds
     	autoplayTimeout:8000,
     	autoplaySpeed: 2000,
    	autoplayHoverPause:true,
     	nav: false,
     	dots: false,
        items : 2,
    responsiveClass:true,
    responsive:{

        0:{

            items:1,
            nav:false
        },
        600:{

            items:1,
            nav:false
        },
        1200:{

            items:2,
            nav:false,
            loop:true
        }
    }
      });

    });


    jQuery(window).load(function() {
       jQuery("#testi-carousel").owlCarousel({
        padding : 23,
        items : 1,
        lazyLoad : true,
        slideSpeed : 2000,
        loop: true,
        infinite:true,
		paginationSpeed :3000,
		lazyLoad : true,
		stopOnHover : true,
		autoPlay : true,
		pagination: false,
		navigation: true,
		itemsDesktop : [1186,3], //5 items between 1000px and901px
		itemsDesktopSmall : [900,2], // betweem 900px and 601px
		itemsTablet: [414,1], //2 items between 600 and 0
		itemsMobile : [400,1], // itemsMobile disabled - inherit from itemsTablet option
      });
    });


    jQuery(document).ready(function() {
       jQuery("#banner").owlCarousel({
        items : 1,
        loop: true,
        lazyLoad : true,
        slideSpeed : 2000,
		paginationSpeed :2000,
		lazyLoad : true,
		stopOnHover : true,
		autoPlay : true,
		pagination: false,
		navigation: true,
		itemsDesktop : [1170,1], //5 items between 1000px and901px
		itemsDesktopSmall : [900,1], // betweem 900px and 601px
		itemsTablet: [600,1], //2 items between 600 and 0
		itemsMobile : [400,1], // itemsMobile disabled - inherit from itemsTablet option
      });

       		jQuery( ".manul-nav ul li a" ).each(function(index) {
   				 jQuery(this).on("click", function(){
			    var a = jQuery('.counter').text();
			    a++;
			   jQuery('.counter').text(a);
		});
		});
    });



var j = jQuery.noConflict();
j(document).ready(function() {
	j('.mm-toggle').click(function() {
		if( j('#mmb').hasClass('on') ) {
			j('#mmb').removeClass('on');
		}
		else {
			j('#mmb').addClass('on');
		}
		j('#mm ul').slideToggle('slow');
	});
});



jQuery('.testimonials').slick({
    dots: true,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2
});

jQuery("#layerslider").layerSlider({
    skinsPath: './front/skins/'
});



    jQuery(window).load(function() {
    // Animate loader off screen
    jQuery("#loader-wrapper").fadeOut("slow");;
  });


// jQuery(window).scroll(startCounter);
        // function startCounter() {
        //     var hT = jQuery('.counter-txt').offset().top,
        //         hH = jQuery('.counter-txt').outerHeight(),
        //         wH = jQuery(window).height();
        //     if (jQuery(window).scrollTop() > hT+hH-wH) {
        //         jQuery(window).off("scroll", startCounter);
        //         jQuery('.counter-txt').each(function () {
        //             var $this = jQuery(this);
        //             jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
        //                 duration: 2000,
        //                 easing: 'swing',
        //                 step: function () {
        //                     $this.text(Math.ceil(this.Counter));
        //                 }
        //             });
        //         });
        //     }
        // }
// var j = jQuery.noConflict();
// j(document).ready(function() {
// 	j('.mm-toggle2').click(function() {
// 		if( j('#mmb2').hasClass('on') ) {
// 			j('#mmb2').removeClass('on');
// 		}
// 		else {
// 			j('#mmb2').addClass('on');
// 		}
// 		j('#mm2 ul').slideToggle('slow');
// 	});
// });
