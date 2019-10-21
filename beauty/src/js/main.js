$(document).ready(function(){
	$('#carouselExample').on('slide.bs.carousel', function (e) {
		var $e = $(e.relatedTarget);
		var idx = $e.index();
		var itemsPerSlide = 4;
		var totalItems = $('.carousel-item').length;
		
		if (idx >= totalItems-(itemsPerSlide-1)) {
				var it = itemsPerSlide - (totalItems - idx);
				for (var i=0; i<it; i++) {
						// append slides to end
						if (e.direction=="left") {
								$('.carousel-item').eq(i).appendTo('.carousel-inner');
						}
						else {
								$('.carousel-item').eq(0).appendTo('.carousel-inner');
						}
				}
		};
	});

	$('.city-trigger').click(function(e){
		e.preventDefault();
		var city = "." + $(this).attr('data-city');
		$('.city-trigger').removeClass('active');
		$('.city-item').removeClass('city-active');
		$(this).addClass('active');
		$(city).addClass('city-active');
	});

	$('.menu-trigger').click(function(e){
		$(this).toggleClass('open');
		$('header').toggleClass('open');
	});

	$('.diploma-slider').owlCarousel({
		loop:true,
		margin:35,
		nav: false,
		dots: true,
		responsive:{
			0:{
				items:1
			},
			731:{
				items:2
			},
			1200:{
				items:4
			}
		}
	});

	$('.specialists-slider').owlCarousel({
		loop:true,
		margin:20,
		nav: true,
		dots: false,
		responsive:{
			0:{
				items:1
			},
			731:{
				items:2
			},
			1200:{
				items:4
			}
		}
	});
});








