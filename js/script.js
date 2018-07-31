// start scroll bottom
$("#scroll-1").click(function() {
    $('html, body').animate({
        scrollTop: $("#judulutama").offset().top
    }, 1500);
});
$("#scroll-2").click(function() {
    $('html, body').animate({
        scrollTop: $("#judulabout").offset().top
    }, 1500);
});
$("#scroll-3").click(function() {
    $('html, body').animate({
        scrollTop: $("#produk-layanan").offset().top
    }, 1500);
});
$("#scroll-4").click(function() {
    $('html, body').animate({
        scrollTop: $("#maps").offset().top
    }, 1500);
});
// end scroll bottom

$(function () {
	var screenWidth = $(window).width();
	var screenHeight = $(window).innerHeight();
	var screenHeightBiasa = $(window).height();
	var $video = $('#videoid');
	var video = $video.get()[0];


	var ratio = screenHeight / screenWidth;
	if ( ratio < (9/16) ) {
		$video.css({
			'height': 'auto',
			'width': (screenWidth)+'px'
		});
	} else {
		$video.css({
			'height': (screenHeight)+'px',
			'width': 'auto'
		});
	}

	$video.on('loadstart', function (event) {
		$('.video-loader').css('visibility', 'visible');
	    $('.video-loader').css('opacity', '1');
	    // video.play();
	});
	
	$video.on('canplay', function (event) {
     	$video.css('visibility', 'visible');
	    $('.video-loader').css('visibility', 'hidden');
	    $('.video-loader').css('opacity', '0');
	    video.play();
	});

	/*video.addEventListener('loadeddata', function() {
	    video.play();
	});

	video.addEventListener('pause', function() {
	    video.play();
	});*/

});
  // START SCROLL TOP

  $(document).ready(function(){
	$(window).scroll(function(){
		var scrollHeight = $(document).height();
		var scrollPosition = $(window).height() + $(window).scrollTop();
		if((scrollHeight - scrollPosition) / scrollHeight === 0) {
			$('#tombolScrollTop').addClass('show animated fadeInRight');
			// $('#tombolScrollTop').addClass('animated fadeIn');
			// alert('cekk');
		} else {
			// alert('tess');
			$('#tombolScrollTop').removeClass('show');
		}
	});
});

function scrolltotop()
{
	$('html, body').animate({scrollTop : 0},1500);
}
  // END SCROLL TOP

  // START owlCarousel
  $(document).ready(function() {
    var owl = $('.owl-carousel-1');
    owl.owlCarousel({
      margin: 0, 
      nav: true,
      dots:false,
      responsive: {
        0: {
          items: 1
        },
        520: {
          items: 2
        },
        720: {
          items: 3
        },
        992: {
          items: 4
        }
      }
    })
    var owl = $('.owl-carousel-3');
    owl.owlCarousel({
      nav: true,
      items: 1
    })
  })
  // END owlCarousel


$(document).ready(function() {
	init();


   	$('.timeline-carousel').slick({
		variableWidth: true,
		infinite: false,
		/*nextArrow: '<i class="material-icons">chevron_right</i>',
		prevArrow: '<i class="material-icons">chevron_left</i>',*/
  	});

	$('.product-nav-carousel').slick({
		infinite: false,
		slidesToShow: 4,
  		slidesToScroll: 4,
  		responsive: [
  			{
				breakpoint: 720,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			}, {
				breakpoint: 520,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}, {
				breakpoint: 414,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
  		]
  	});

  	$('.product-nav-carousel a').click(function (e) {
		e.preventDefault();

		var _this = $(this);
		var nav_id = $(_this).attr('href');

		$('.product-nav-carousel li a').each(function() {
			$(this).removeClass('active');
		});

		_this.addClass('active');

	
		$('.tab-content--product .tab-pane').each(function() {

			if ( $(this).attr('id') == nav_id.substring(1) ) {
				$(this).addClass('active');
				$(this).tab('show');
			} else {
				$(this).removeClass('active');
			}

		});

	});
});

function init() {
	wow();
	mediaAnimation();
	$('.grid').masonry({
	  itemSelector: '.grid-item'
	});


	$("[data-fancybox]").fancybox({
	 	buttons : [
	        'close'
    	]
	});

	setTimelineHeight();
}

function wow() {
	new WOW().init();

}

function mediaAnimation() {
	$('.media-item:odd').addClass('fadeInLeft');
	$('.media-item:even').addClass('fadeInRight');
}

function initMap() {
	var styledMapType = new google.maps.StyledMapType(
	    [
		    {
		        "featureType": "administrative",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "gamma": "1.82"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "gamma": "1.96"
		            },
		            {
		                "lightness": "-9"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative",
		        "elementType": "labels.text.stroke",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "lightness": "25"
		            },
		            {
		                "gamma": "1.00"
		            },
		            {
		                "saturation": "-100"
		            }
		        ]
		    },
		    {
		        "featureType": "poi.business",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "poi.park",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "hue": "#ffaa00"
		            },
		            {
		                "saturation": "-43"
		            },
		            {
		                "visibility": "on"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "visibility": "simplified"
		            },
		            {
		                "hue": "#ffaa00"
		            },
		            {
		                "saturation": "-70"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway.controlled_access",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "visibility": "on"
		            }
		        ]
		    },
		    {
		        "featureType": "road.arterial",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "saturation": "-100"
		            },
		            {
		                "lightness": "30"
		            }
		        ]
		    },
		    {
		        "featureType": "road.local",
		        "elementType": "all",
		        "stylers": [
		            {
		                "saturation": "-100"
		            },
		            {
		                "lightness": "40"
		            },
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "transit.station.airport",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "gamma": "0.80"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    }
		],
    {name: 'Styled Map'});

	var map = new google.maps.Map(document.getElementById('maps'), {
		center: {lat: -6.9848341, lng: 110.4132796},
		zoom: 16,
		zoomControl: true,
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: false,
		rotateControl: false,
		fullscreenControl: false,
		scrollwheel: false,
		mapTypeControlOptions: {
	        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
	                'styled_map']
	      }
	});

	var image = 'images/map-pin.png';
	var marker = new google.maps.Marker({
	    position: {lat: -6.9858341, lng: 110.4132796},
	    map: map,
	    icon: image
  	});

	map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
}

var TestimoniCarousel = $(".testimoni-carousel");
TestimoniCarousel.owlCarousel({
    loop:true,
    margin:40,
    items:1,
    dots:false,
    nav: true
});

var ClientCarousel = $(".client-carousel");
ClientCarousel.owlCarousel({
    loop:true,
    margin:40,
    items:5
});

var VisiMisiCarousel = $(".VisiMisiCarousel");
VisiMisiCarousel.owlCarousel({
    loop:true,
    margin:40,
    autoPlay: 1000,
    items:1,
    dots: false,
    nav: true
});


$('.navbar-toggler').on('click', function(event) {
	event.preventDefault();

	$('.main-menu').removeClass('animated fadeInDown fadeOutUp');

	if ( !$('.main-menu').hasClass('show-main-menu') ) {
		$('.main-menu').addClass('show-main-menu');
		$('.main-menu').addClass('animated fadeInDown');

		$('.navbar-toggler').addClass('is-active');
		$('body').addClass('full-overflow');
	} else {
		$('.navbar-toggler').removeClass('is-active');
		$('body').removeClass('full-overflow');
		
		$('.main-menu').animateCss('fadeOutUp', function() {
			$('.main-menu').removeClass('show-main-menu');
		});
	}
});

$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});

function setTimelineHeight(){
	event.preventDefault();

	var divHeight = $('.cd-timeline-block:last-child').height();

	$('<style>#cd-timeline:before {height: calc(100% - ' + divHeight + 'px);}</style>').appendTo('head');

}

