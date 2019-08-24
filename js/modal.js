$(document).ready(function() {

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
	
});