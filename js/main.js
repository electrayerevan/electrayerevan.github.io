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

	$('.nav-tabs > li.active a').each(function (i, el) {
		var catId = el.getAttribute('href');
		loadTabImages(catId);
	});

	$('.nav-tabs > li a').on('show.bs.tab', function (e) {
		var catId = e.target.getAttribute('href');
		loadTabImages(catId);
	});


	function loadTabImages(id) {
		$(id).find('img[data-src]').each(function (i, el) {
			el.src = el.dataset.src;
			el.removeAttribute('data-src');
		});
	}

		// ACTIVITY INDICATOR

	var activityIndicatorOn = function()
		{
			$( '<div id="imagelightbox-loading"><div></div></div>' ).appendTo( 'body' );
		},
		activityIndicatorOff = function()
		{
			$( '#imagelightbox-loading' ).remove();
		},


		// OVERLAY

		overlayOn = function()
		{
			$( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
		},
		overlayOff = function()
		{
			$( '#imagelightbox-overlay' ).remove();
		},


		// CLOSE BUTTON

		closeButtonOn = function( instance )
		{
			$( '<button type="button" id="imagelightbox-close" title="Close"></button>' ).appendTo( 'body' ).on( 'click touchend', function(){ $( this ).remove(); instance.quitImageLightbox(); return false; });
		},
		closeButtonOff = function()
		{
			$( '#imagelightbox-close' ).remove();
		},


		// CAPTION

		captionOn = function()
		{
			var description = $( 'a[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"]' );
			if( description.length > 0 ) {
				var alt = description.attr( 'alt' );
				if (alt) {
					$( '<div id="imagelightbox-caption">' + alt + '</div>' ).appendTo( 'body' );
				}
			}
		},
		captionOff = function()
		{
			$( '#imagelightbox-caption' ).remove();
		},


		// NAVIGATION

		navigationOn = function( instance, selector )
		{
			var images = $( selector );
			if( images.length )
			{
				var nav = $( '<div id="imagelightbox-nav"></div>' );
				for( var i = 0; i < images.length; i++ )
					nav.append( '<button type="button"></button>' );

				nav.appendTo( 'body' );
				nav.on( 'click touchend', function(){ return false; });

				var navItems = nav.find( 'button' );
				navItems.on( 'click touchend', function()
				{
					var $this = $( this );
					if( images.eq( $this.index() ).attr( 'href' ) != $( '#imagelightbox' ).attr( 'src' ) )
						instance.switchImageLightbox( $this.index() );

					navItems.removeClass( 'active' );
					navItems.eq( $this.index() ).addClass( 'active' );

					return false;
				})
				.on( 'touchend', function(){ return false; });
			}
		},
		navigationUpdate = function( selector )
		{
			var items = $( '#imagelightbox-nav button' );
			items.removeClass( 'active' );
			items.eq( $( selector ).filter( '[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"]' ).index( selector ) ).addClass( 'active' );
		},
		navigationOff = function()
		{
			$( '#imagelightbox-nav' ).remove();
		},


		// ARROWS

		arrowsOn = function( instance, selector )
		{
			var $arrows = $( '<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"></button><button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"></button>' );

			$arrows.appendTo( 'body' );

			$arrows.on( 'click touchend', function( e )
			{
				e.preventDefault();

				var $this	= $( this ),
					$target	= $( selector + '[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"]' ),
					index	= $target.index( selector );

				if( $this.hasClass( 'imagelightbox-arrow-left' ) )
				{
					index = index - 1;
					if( !$( selector ).eq( index ).length )
						index = $( selector ).length;
				}
				else
				{
					index = index + 1;
					if( !$( selector ).eq( index ).length )
						index = 0;
				}

				instance.switchImageLightbox( index );
				return false;
			});
		},
		arrowsOff = function()
		{
			$( '.imagelightbox-arrow' ).remove();
		};


	var selectorF = '.img-container a';
	var instanceF = $( selectorF ).imageLightbox({
		onStart:		function() { 
			overlayOn(); 
			// closeButtonOn( instanceF ); arrowsOn( instanceF, selectorF ); 
		},
		onEnd:			function() { 
			overlayOff(); captionOff(); 
			// closeButtonOff(); arrowsOff(); 
			activityIndicatorOff();
		},
		onLoadStart: 	function() { captionOff(); activityIndicatorOn(); },
		onLoadEnd:	 	function() { captionOn(); activityIndicatorOff(); $( '.imagelightbox-arrow' ).css( 'display', 'block' ); }
	});

});
