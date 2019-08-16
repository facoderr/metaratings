$(document).ready(function() {

	// Click Event

	$(document).on('click', '.js-search', function() {
		$(this).toggleClass('is-active');
		$('.nav-head').toggleClass('is-active');
		$('.nav-search').toggleClass('is-active');
	});
	$(document).on('click', '.js-alert', function() {
		$(this).toggleClass('is-active');
	});
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

	$('.js-logo').fadeOut('slow');
	$('.js-preloader').delay(400).fadeOut('slow');
	var heightChild = $('.nav-menu').find('> li').outerHeight();
	countChild = $('.nav-menu').find('> li').length;
	totalHeight = heightChild * countChild;
	$('.nav-wrap').css('min-height', totalHeight);

	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	if ($(window).width() <= 1099) {
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
		$('.nav-menu').each(function() {
			if ($('.not-child').hasClass('not-child')) {
				$(this).find('.not-child').removeClass('not-child').addClass('has-child');
			}
			if ($('.js-not-child').hasClass('js-not-child')) {
				$(this).find('.js-not-child').removeClass('js-not-child').addClass('js-child');
			}
			if ($('.not-hidden').hasClass('not-hidden')) {
				$(this).find('.not-hidden').removeClass('not-hidden').addClass('is-hidden');
			}
		});
	} else {
		$(document).on('mouseover', '.nav-menu-item', function() { 
			$('.nav-head').addClass('is-active');
			$('.js-search').removeClass('is-active');
			$('.nav-search').removeClass('is-active');
			if ($(this).hasClass('not-child')) {
				$(this).parent().children('.nav-menu-item.not-child').removeClass('is-hover');
				$(this).addClass('is-hover');
			} else {
				$(this).parent().children('.nav-menu-item.not-child').removeClass('is-hover');
			}
		});
		$(document).on('mouseout', '.nav-menu-item', function() { 
			$('.nav-head').removeClass('is-active');
			$(this).parent().children('.nav-menu-item.not-child').removeClass('is-hover');
		});
		$(document).bind('mouseup touchend', function(e) {
			if ($(e.target).closest('.nav-menu').length || $(e.target).closest('.nav-search').length) return;
			$('.js-search').removeClass('is-active');
			$('.nav-head').removeClass('is-active');
			$('.nav-search').removeClass('is-active');
		});
		$('.nav-menu').each(function() {
			if ($('.has-child').hasClass('has-child')) {
				$(this).find('.has-child').removeClass('has-child').addClass('not-child');
			}
			if ($('.js-child').hasClass('js-child')) {
				$(this).find('.js-child').removeClass('js-child').addClass('js-not-child');
			}
			if ($('.is-hidden').hasClass('is-hidden')) {
				$(this).find('.is-hidden').removeClass('is-hidden').addClass('not-hidden');
			}
		});
	}

	setTimeout(function() {
		if ($(window).width() <= 1099) {
			$('.toolbar').addClass('is-animate');
		} else {
			$('.toolbar').removeClass('is-animate');
		}
	}, 500);

	window.addEventListener('resize', () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		if ($(window).width() <= 1099) {
			$('.nav-menu').each(function() {
				if ($('.not-child').hasClass('not-child')) {
					$(this).find('.not-child').removeClass('not-child').addClass('has-child');
				}
				if ($('.js-not-child').hasClass('js-not-child')) {
					$(this).find('.js-not-child').removeClass('js-not-child').addClass('js-child');
				}
				if ($('.not-hidden').hasClass('not-hidden')) {
					$(this).find('.not-hidden').removeClass('not-hidden').addClass('is-hidden');
				}
			});
			$('.toolbar').addClass('is-animate');
		} else {
			$('.nav-menu').each(function() {
				if ($('.has-child').hasClass('has-child')) {
					$(this).find('.has-child').removeClass('has-child').addClass('not-child');
				}
				if ($('.js-child').hasClass('js-child')) {
					$(this).find('.js-child').removeClass('js-child').addClass('js-not-child');
				}
				if ($('.is-hidden').hasClass('is-hidden')) {
					$(this).find('.is-hidden').removeClass('is-hidden').addClass('not-hidden');
				}
			});
			$('.toolbar').removeClass('is-animate');
		}
	});

	//
	
});