$(document).ready(function() {

	// Tools Event

	$(document).on('click', '.js-toggle', function() {
		$(this).toggleClass('is-active');
		$('.nav').toggleClass('is-open');
	});
	$(document).on('click', '.js-search', function() {
		$(this).toggleClass('is-active');
		$('.nav-head').toggleClass('is-active');
		$('.nav-search').toggleClass('is-active');
	});
	$(document).on('click', '.js-alert', function() {
		$(this).toggleClass('is-active');
	});
	
	//


	// Voice Event

	$('.js-progress').each(function(){
		let progress = $(this).data('progress');
		$(this).css('width', progress + '%')
	});

	//


	// Modal Event

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

	let slinky = $('.nav-wrap').slinky({title: true});

	function inMobile() {
		$('meta[name="viewport"]').attr('content', 'width=device-width, initial-scale=1');
		if (typeof slinky !== 'undefined') {
			slinky.destroy();
		}
		slinky = $('.nav-wrap').slinky({title: true});
		$('.nav').removeClass('is-desktop');
		$(document).on('click', '.js-nav-close', function() {
			$('.nav-head').removeClass('is-active');
			slinky.home();
			$('.js-toggle').removeClass('is-active');
			$('.nav').removeClass('is-open');
		});
		$(document).on('click', '.js-next', function() {
			$('.nav-head-back').html('<span class="nav-menu-arrow"><svg><use xlink:href="#arrow"></use></svg></span>');
			$('.nav-submenu').removeClass('is-active');
			$(this).next('ul')
				.addClass('is-active')
				.children('.header')
				.find('.title').clone()
				.removeClass('title')
				.appendTo('.nav-head-back');
			if ($('.nav-submenu').hasClass('is-active')) {
				$('.nav-head').addClass('is-active');
				$('.nav-menu').removeClass('is-active');
			} else {
				$('.nav-head').removeClass('is-active');
				$('.nav-menu').addClass('is-active');
			}
		});
		$(document).on('click', '.js-prev', function() {
			$('.nav-head-back').html('<span class="nav-menu-arrow"><svg><use xlink:href="#arrow"></use></svg></span>');
			$('.nav-submenu').removeClass('is-active');
			$('.nav-submenu.active')
				.parents('.nav-submenu')
				.addClass('is-active')
				.children('.header')
				.find('.title').clone()
				.removeClass('title')
				.appendTo('.nav-head-back');
			$('.nav-submenu.active').find('.back').trigger('click');
			if ($('.nav-submenu').hasClass('is-active')) {
				$('.nav-head').addClass('is-active');
				$('.nav-menu').removeClass('is-active');
			} else {
				$('.nav-head').removeClass('is-active');
				$('.nav-menu').addClass('is-active');
			}
		});
	}
	function inDesktop() {
		$('meta[name="viewport"]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=1');
		if (typeof slinky !== 'undefined') {
			slinky.destroy();
		}
		$('.nav').addClass('is-desktop');
		$('.nav-submenu').removeAttr('style');
		$(document).on('mouseover', '.is-desktop .nav-menu-item', function() {
			$('.is-desktop .nav-head').addClass('is-active');
			$('.is-desktop .js-search').removeClass('is-active');
			$('.is-desktop .nav-search').removeClass('is-active');
			$(this).siblings('.nav-menu-item').removeClass('is-hover');
			$(this).addClass('is-hover');
		});
		$(document).on('mouseout', '.is-desktop .nav-menu-item', function() {
			$('.is-desktop .nav-head').removeClass('is-active');
			$(this).removeClass('is-hover');
		});
		$(document).bind('mouseup touchend', function(e) {
			if ($(e.target).closest('.js-search').length || $(e.target).closest('.nav-menu').length || $(e.target).closest('.nav-search').length) return;
			$('.is-desktop .nav-head').removeClass('is-active');
			$('.is-desktop .js-search').removeClass('is-active');
			$('.is-desktop .nav-search').removeClass('is-active');
		});
	}
	function inResize() {
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
			slinky = $('.nav-wrap').slinky({title: true});
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