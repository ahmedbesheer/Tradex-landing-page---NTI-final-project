// Owl Carousel
$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			1000: {
				items: 2
			}
		}
	});
});
