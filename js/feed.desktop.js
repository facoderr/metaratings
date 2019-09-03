$(document).ready(function() {

	// Feed Desktop Event

	let scrollbarWidth = $(window).outerWidth() - $(window).innerWidth();
	$('.feed-bar-list').css('margin-right', -scrollbarWidth);

	$('.feed-bar-list').bind('scroll', function() {
		if ($('.feed-bar-list').scrollTop() > 1) {
			$('.feed-bar-head').addClass('is-active');
		} else {
			$('.feed-bar-head').removeClass('is-active');
		}
		if ('backdropFilter' in document.documentElement.style === false) {
			if ($('.feed-bar-head').hasClass('is-active')) {
				$('.feed-bar-head').css('background', '#fff');
			} else {
				$('.feed-bar-head').css('background', 'transparent');
			}
		}
	});

	$(document).on('click', '.js-setting', function() {
		$(this).addClass('is-active');
		$('.feed-bar').addClass('is-active');
		$('.feed-setting').addClass('is-open');
	});
	$(document).on('click', '.js-setting-close', function() {
		$('.js-setting').removeClass('is-active');
		$('.feed-bar').removeClass('is-active');
		$('.feed-setting').removeClass('is-open');
	});
	$('.feed-box-link').each(function() {
		if ($(this).find('.feed-primary-bg').hasClass('feed-primary-bg')) {
			$(this).addClass('feed-primary');
		} else if ($(this).find('.feed-success-bg').hasClass('feed-success-bg')) {
			$(this).addClass('feed-success');
		}
	});
	$('.feed-box-subtitle').each(function() {
		if ($(this).outerHeight() >= 46) {
			$(this).addClass('is-max');
		} else {
			$(this).removeClass('is-max');
		}
	});

	//
	
});