$(function() {
	$('.carousel-inner').slick({
		dots: false,
		infinite: true,
		speed: 800,
		pauseOnHover: false,
		autoplay: true,
		autoplaySpeed: 3000,
		fade: true,
		cssEase: 'linear',
		prevArrow: ".left.carousel-control",
		nextArrow: ".right.carousel-control"
	});
});
