$(document).ready(function() {

	// Feed Desktop Event

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
		if ($(this).find('.feed-primary').hasClass('feed-primary')) {
			$(this).addClass('feed-box-link-primary');
		} else if ($(this).find('.feed-success').hasClass('feed-success')) {
			$(this).addClass('feed-box-link-success');
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