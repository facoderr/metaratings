$(document).ready(function() {

	// Voice Event

	$('.js-progress').each(function(){
		let progress = $(this).data('progress');
		$(this).css('width', progress + '%');
		if (progress < 100) {
			if ($(this).hasClass('voice-progress-yes')) {
				$(this).css('border-radius', '3px 0 0 3px');
			} else if ($(this).hasClass('voice-progress-no')) {
				$(this).css('border-radius', '0 3px 3px 0');
			}
		} else {
			$(this).css('border-radius', '3px');
		}
	});

	//
	
});