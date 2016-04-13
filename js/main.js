$(function() {
	// resize header on scroll
	$(window).on('scroll', headerResizeHandler);

	function headerResizeHandler() {
		var distanceY = window.pageYOffset || document.documentElement.scrollTop,
			shrinkOn = 0,
			$header = $('.navbar');

		if (distanceY > shrinkOn) {
			$header.addClass("smaller");
		} else {
			$header.removeClass("smaller");
		}
	}

	headerResizeHandler();

	// nav menu animated scroll to element	
	$('.nav a, .prognosis-library').on('click', function(e) {
		var id = $(this).attr('href');

		if (id[0] == '#') {
			e.preventDefault();
			// close responsive menu if open
			var $navbarCollapse = $('#navbarCollapse');
			var navbarOpen = $navbarCollapse.hasClass('in') || $navbarCollapse.hasClass('collapsing');
			if (navbarOpen) {
				$navbarCollapse.collapse('hide');
			}

			// scroll to element
			$('html, body').animate({
				scrollTop: $(id).offset().top - 52
			}, 1000);
		}
	});
});
