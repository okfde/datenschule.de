/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

$(document).ready(function () {

	var nr = $('body').attr('data-card');
	if (isNaN(nr)) nr = 1;

	$('#slick').slick({
		lazyLoad: 'ondemand',
		"pauseOnHover": true,
		"pauseOnDotsHover": true,
		"focusOnSelect": true,
		"fade": true,
		"dots": true,
		"accessibility": true,
		"autoplay": true,
		"autoplaySpeed": 12000,
		"initialSlide": nr - 1,
		"slidesToShow": 1,
		"slidesToScroll": 1
	});

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$('.page-scroll a').bind('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});

	//$('.card .icon-fullscreen').fullscreenslides();
	$('.card .icon-fullscreen').magnificPopup({
		type: 'image'
		// other options
	});
// Highlight the top nav as scrolling occurs
	$('body').scrollspy({
		target: '.navbar-fixed-top'
	});


// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function () {
		$('.navbar-toggle:visible').click();
	});


	/**
	 * cbpAnimatedHeader.js v1.0.0
	 * http://www.codrops.com
	 *
	 * Licensed under the MIT license.
	 * http://www.opensource.org/licenses/mit-license.php
	 *
	 * Copyright 2013, Codrops
	 * http://www.codrops.com
	 */

	var docElem = document.documentElement,
		header = $('.navbar-fixed-top'),
		scroller = $('#quick-scroll'),
		didScroll = false,
		changeHeaderOn = 20,
		showScrollerOn = 300;

	function init() {
		scrollPage();
		window.addEventListener('scroll', function (event) {
			if (!didScroll) {
				didScroll = true;
				setTimeout(scrollPage, 250);
			}
		}, false);
	}

	function scrollPage() {
		var sy = scrollY();
		if (sy >= changeHeaderOn) {
			header.addClass('navbar-shrink');
		} else {
			header.removeClass('navbar-shrink');
		}
		if (sy >= showScrollerOn) {
			scroller.removeClass('hidden');
		} else {
			scroller.addClass('hidden');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();


});