jQuery(document).ready(function ($) {
	var owl = $('.owl-main').owlCarousel({
		loop: true,
		margin: 60,
		nav: true,
		dotsContainer: '.big_circle',
		autoplay: true,
		autoplayTimeout: 5000,
		smartSpeed: 1000,
		center: true,
		items: 1,
	});

	$('.big_circle .item').click(function () {
		var index_th = $(this).index();
		owl.trigger('to.owl.carousel', [index_th, 400]);
	});

	var owl_food = $('.owl-food').owlCarousel({
		loop: true,
		nav: true,
		margin: 30,
		dotsContainer: '.manage-blocks',
		autoplay: true,
		autoplayTimeout: 5000,
		smartSpeed: 1000,
		center: true,
		items: 1,
	});

	$('.manage-blocks .item').click(function () {
		var index_th = $(this).index();
		owl_food.trigger('to.owl.carousel', [index_th, 400]);
	});
});