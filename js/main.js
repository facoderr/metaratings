$(document).ready(function() {

	// Click Event

	$(document).on('click', '.js-toggle', function() {
		$(this).toggleClass('is-active');
		$('.nav').toggleClass('is-open');
	});
	$(document).on('click', '.js-nav-close', function() {
		var heightChild = $('.nav-menu').find('> li').outerHeight();
				countChild = $('.nav-menu').find('> li').length;
				totalHeight = heightChild * countChild;
		$('.nav-wrap').css('min-height', totalHeight);
		$('.nav-head').removeClass('is-active');
		$('.nav-menu').removeClass('is-out');
		$('.nav-submenu').removeClass('is-out').removeClass('is-active').addClass('is-hidden');
		$('.js-toggle').removeClass('is-active');
		$('.nav').removeClass('is-open');
	});
	$('.has-child').children('.js-child').on('click', function() { 
		var selected = $(this);
				heightChild = selected.next('ul').find('> li').outerHeight();
				countChild = selected.next('ul').find('> li').length;
				totalHeight = heightChild * countChild;
		$('.nav-wrap').css('min-height', totalHeight);
		selected.next('ul').removeClass('is-hidden').addClass('is-active').end().parent('.has-child').parent('ul').addClass('is-out');
		$('.nav-head').toggleClass('is-active', $('.nav-menu').hasClass('is-out'));
		$('.nav-head-back').html('');
		$('.nav-submenu.is-active:not(.is-out) > li:first-child').find('.js-back').clone().appendTo('.nav-head-back');
	});
	$(document).on('click', '.js-back', function() {
		var selected = $(this);
				heightChild = selected.parent().parent().parent().parent().find('> li').outerHeight();
				countChild = selected.parent().parent().parent().parent().find('> li').length;
				totalHeight = heightChild * countChild;
		$('.nav-wrap').css('min-height', totalHeight);
		selected.parent().parent('ul').removeClass('is-active').addClass('is-hidden').parent('.has-child').parent('ul').removeClass('is-out');
		$('.nav-head').toggleClass('is-active', $('.nav-menu').hasClass('is-out'));

		$('.nav-head-back').html('');
		$('.nav-submenu.is-active:not(.is-out) > li:first-child').find('.js-back').clone().appendTo('.nav-head-back');
	});
	$(document).on('click', '.nav-head-back .js-back', function(event) {
		event.preventDefault();
		$('.nav-submenu.is-active:not(.is-out) > li:first-child').find('.js-back').trigger('click');
	});
	$(document).on('click', '.js-success', function() {
		$('.js-modal-success').fadeIn().addClass('is-open');
	});
	$(document).on('click', '.js-modal-close', function() {
		$('.js-modal-success').fadeOut().removeClass('is-open');
	})
	$(document).bind('mouseup touchend', function(e) {
		if ($(e.target).closest('.modal-success-wrap').length) return;
		$('.js-modal-success').fadeOut().removeClass('is-open');
	});

	//

	// Load Event

	$('.js-logo polygon').css('fill-opacity', '1');
	$('.js-logo').fadeOut('slow');
	$('.js-preloader').delay(400).fadeOut('slow');
	var heightChild = $('.nav-menu').find('> li').outerHeight();
	countChild = $('.nav-menu').find('> li').length;
	totalHeight = heightChild * countChild;
	$('.nav-wrap').css('min-height', totalHeight);

	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	setTimeout(function() {
		if ($(window).width() <= 575) {
			$('.toolbar').addClass('is-animate');
		} else {
			$('.toolbar').removeClass('is-animate');
		}
	}, 500);

	window.addEventListener('resize', () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		if ($(window).width() <= 575) {
			$('.toolbar').addClass('is-animate');
		} else {
			$('.toolbar').removeClass('is-animate');
		}
	});

	//
	
});