$(document).ready(function() {

	// Tools Event

	$(document).on('click', '.js-search', function() {
		$(this).toggleClass('is-active');
		$('.nav-head').toggleClass('is-active');
		$('.nav-search').toggleClass('is-active');
	});
	$(document).on('click', '.js-alert', function() {
		$(this).toggleClass('is-active');
	});
	$(document).on('click', '.nav-search-input', function() {
		setTimeout(function() {
			$('.nav-overflow').animate({
				scrollTop: $('.nav-search').offset().top + $('.nav-search').outerHeight()
			}, 300);
		}, 500);
		setTimeout(function() {
			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 300);
		}, 500);
	});
	
	//

	// Tab Event

	let clickedTab = $('.js-tabItem.is-active');
			tabWrapper = $('.js-tabWrap');
			activeTab = tabWrapper.find('.is-open');
			activeTabHeight = activeTab.outerHeight();

	tabWrapper.css('min-height', activeTabHeight);

	function tabInit() {
		clickedTab = $('.js-tabItem.is-active');
		activeTab.fadeOut(300, function() {
			$('.js-tabBlock').removeClass('is-open');
			let clickedTabIndex = clickedTab.index('.js-tabItem');
			$('.js-tabBlock').eq(clickedTabIndex).addClass('is-open');
			activeTab = tabWrapper.find('.is-open');
			activeTabHeight = activeTab.outerHeight();
			tabWrapper.stop().delay(50).animate({
				'min-height': activeTabHeight
			}, 250, function() {
				activeTab.delay(50).fadeIn(250);
			});
		});
	}

	$('.js-tabList').on('click', '.js-tabItem', function() {
		$('.js-tabItem').removeClass('is-active');
		$(this).addClass('is-active');
		tabInit();
	});

	//

	// Responsive Function

	let slinky = $('.nav-wrap').slinky({title: true});

	function inMobile() {
		$('meta[name="viewport"]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=1');
		if (typeof slinky !== 'undefined') {
			slinky.destroy();
		}
		slinky = $('.nav-wrap').slinky({title: true});
		slinky.home();
		$('.nav').removeClass('is-desktop');
		$('.nav-head').removeClass('is-active');
		$('.nav-menu').addClass('is-active');
		$(document).on('click', '.js-toggle', function() {
			slinky.home();
			$(this).toggleClass('is-active');
			$('.nav').toggleClass('is-open');
			$('.nav-head').removeClass('is-active');
			$('.nav-menu').addClass('is-active');
		});
		$(document).on('click', '.js-nav-close', function() {
			slinky.home();
			$('.js-toggle').removeClass('is-active');
			$('.nav').removeClass('is-open');
			$('.nav-head').removeClass('is-active');
			$('.nav-menu').addClass('is-active');
		});
		$(document).on('click', '.js-next', function() {
			$('.nav-head-back').html('<span class="nav-menu-arrow"><svg><use xlink:href="#arrow"></use></svg></span>');
			$('.nav-submenu').removeClass('is-active');
			$(this).next('ul')
				.addClass('is-active')
				.children('.nav-menu-header')
				.find('.js-title').clone()
				.removeClass('js-title')
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
				.children('.nav-menu-header')
				.find('.js-title').clone()
				.removeClass('js-title')
				.appendTo('.nav-head-back');
			$('.nav-submenu.active').find('.js-back').trigger('click');
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
		$('meta[name="viewport"]').attr('content', 'width=device-width, initial-scale=1');
		if (typeof slinky !== 'undefined') {
			slinky.destroy();
		}
		$('.nav').addClass('is-desktop');
		$('.nav-submenu').removeAttr('style');
		$(document).on('mouseover', '.is-desktop .nav-menu-item', function() {
			if ($(this).children('.nav-submenu').length) {
				$('.is-desktop .nav-head').addClass('is-active');
			} else {
				$('.is-desktop .nav-head').removeClass('is-active');
			}
			$('.is-desktop .nav-search').removeClass('is-active');
			$('.js-search').removeClass('is-active');
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
			$('.is-desktop .nav-search').removeClass('is-active');
			$('.js-search').removeClass('is-active');
		});
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

	var width = $(window).width();
	$(window).resize(function() {
		if ($(this).width() != width) {
			width = $(this).width();
			if ($(window).width() <= 1099) {
				slinky = $('.nav-wrap').slinky({title: true});
				inMobile();
				$('.toolbar').addClass('is-animate');
			} else {
				inDesktop();
				$('.toolbar').removeClass('is-animate');
			}
		}
	});

	//

	// Load Event

	$('.js-logo').fadeOut('slow');
	$('.js-preloader').delay(400).fadeOut('slow');

	//
	
});