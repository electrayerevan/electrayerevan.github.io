$(function() {
	$('.carousel-inner').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		pauseOnHover: false,
		autoplay: true,
		autoplaySpeed: 3000,
		fade: true,
		cssEase: 'linear',
		nextArrow: ".left.carousel-control",
		prevArrow: ".right.carousel-control"
	});
});
