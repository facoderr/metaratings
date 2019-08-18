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

	// Responsive Function

	function inDesktop() {
		$('meta[name="viewport"]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=1');
		$('.nav').removeClass('is-mobile');
		$('.nav').addClass('is-desktop');
		$(document).on('mouseover', '.is-desktop .nav-menu-item', function() {
			$('.is-desktop .nav-head').addClass('is-active');
			$('.js-search').removeClass('is-active');
			$('.nav-search').removeClass('is-active');
			if ($(this).hasClass('not-child')) {
				$(this).parent().children('.is-desktop .nav-menu-item.not-child').removeClass('is-hover');
				$(this).addClass('is-hover');
			} else {
				$(this).parent().children('.is-desktop .nav-menu-item.not-child').removeClass('is-hover');
			}
		});
		$(document).on('mouseout', '.is-desktop .nav-menu-item', function() {
			$('.is-desktop .nav-head').removeClass('is-active');
			$(this).parent().children('.is-desktop .nav-menu-item.not-child').removeClass('is-hover');
		});
		$(document).bind('mouseup touchend', function(e) {
			if ($(e.target).closest('.js-search').length || $(e.target).closest('.is-desktop .nav-menu').length || $(e.target).closest('.is-desktop .nav-search').length) return;
			$('.is-desktop .nav-head').removeClass('is-active');
			$('.js-search').removeClass('is-active');
			$('.nav-search').removeClass('is-active');
		});
		$('.is-desktop .nav-menu').each(function() {
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
	function inMobile() {
		$('meta[name="viewport"]').attr('content', 'width=device-width, initial-scale=1');
		$('.nav').removeClass('is-desktop');
		$('.nav').addClass('is-mobile');
		$(document).on('click', '.is-mobile .has-child > .js-child', function() {
			var selected = $(this);
					heightChild = selected.next('.is-mobile ul').find('> li').outerHeight();
					countChild = selected.next('.is-mobile ul').find('> li').length;
					totalHeight = heightChild * countChild;
			$('.is-mobile .nav-wrap').css('min-height', totalHeight);
			selected.next('.is-mobile ul').removeClass('is-hidden').addClass('is-active').end().parent('.is-mobile .has-child').parent('.is-mobile ul').addClass('is-out');
			$('.is-mobile .nav-head').toggleClass('is-active', $('.is-mobile .nav-menu').hasClass('is-out'));
			$('.is-mobile .nav-head-back').html('');
			$('.is-mobile .nav-submenu.is-active:not(.is-out) > li:first-child').find('.js-back').clone().appendTo('.is-mobile .nav-head-back');
		});
		$(document).on('click', '.is-mobile .js-back', function() {
			var selected = $(this);
					heightChild = selected.parent().parent().parent().parent().find('> li').outerHeight();
					countChild = selected.parent().parent().parent().parent().find('> li').length;
					totalHeight = heightChild * countChild;
			$('.is-mobile .nav-wrap').css('min-height', totalHeight);
			selected.parent().parent('.is-mobile ul').removeClass('is-active').addClass('is-hidden').parent('.is-mobile .has-child').parent('.is-mobile ul').removeClass('is-out');
			$('.is-mobile .nav-head').toggleClass('is-active', $('.is-mobile .nav-menu').hasClass('is-out'));
			$('.is-mobile .nav-head-back').html('');
			$('.is-mobile .nav-submenu.is-active:not(.is-out) > li:first-child').find('.js-back').clone().appendTo('.is-mobile .nav-head-back');
		});
		$(document).on('click', '.is-mobile .nav-head-back .js-back', function(event) {
			event.preventDefault();
			$('.is-mobile .nav-submenu.is-active:not(.is-out) > li:first-child').find('.js-back').trigger('click');
		});
		$('.is-mobile .nav-menu').each(function() {
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
	}
	function inResize() {
		var heightChild = $('.nav-menu').find('> li').outerHeight();
				countChild = $('.nav-menu').find('> li').length;
				totalHeight = heightChild * countChild;
		$('.nav-wrap').css('min-height', totalHeight);

		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}

	//

	// Resize Event

	if ($(window).width() <= 1099) {
		inMobile();
	} else {
		inDesktop();
	}

	setTimeout(function() {
		if ($(window).width() <= 1099) {
			$('.toolbar').addClass('is-animate');
		} else {
			$('.toolbar').removeClass('is-animate');
		}
	}, 500);

	$(window).resize(function() {
		inResize();
		if ($(window).width() <= 1099) {
			inMobile();
			$('.toolbar').addClass('is-animate');
		} else {
			inDesktop();
			$('.toolbar').removeClass('is-animate');
		}
	});

	//

	// Load Event

	$('.js-logo').fadeOut('slow');
	$('.js-preloader').delay(400).fadeOut('slow');
	inResize();

	//
	
});