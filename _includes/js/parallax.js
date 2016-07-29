$(document).ready(function () {

	var parallaxElements = [];

	function parallax(scrollTop) {
		parallaxElements.forEach(function (pe) {
			var viewportOffsetTop = pe.initialOffsetY - scrollTop;
			pe.elm.css({marginTop: (viewportOffsetTop / pe.speed)});
		});
	}

	// $('html,body').scrollTop(1); // auto scroll to top

	function init() {
		// touch event check stolen from Modernizr
		var touchSupported = (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);

		// if touch events are supported, tie our animation to the position to these events as well
		if (touchSupported) {
			$(window).bind('touchmove', function (e) {
				parallax(e.currentTarget.scrollY);
			});
		}

		$(window).bind('scroll', function (e) {
			parallax($(this).scrollTop());
		});

		// update vars used in parallax calculations on window resize
		// $(window).resize(function () {
		// 	parallaxElements.forEach(function (pe) {
		// 		pe.initialOffsetY = pe.elm.offset().top;
		// 	});
		// });

		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		$('.parallax').each(function () {
			var $elm = $(this);
			parallaxElements.push({
				speed: $elm.data('speed') || getRandomInt(3, 6),
				elm: $elm,
				initialOffsetY: $elm.offset().top
			});
		});
		parallax($(window).scrollTop());
	}

	init();
});
