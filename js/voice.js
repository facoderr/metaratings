$(document).ready(function() {

	// Voice Event

	$('.js-progress').each(function(){
		let progress = $(this).data('progress');
		if (progress != 0) {
			$(this).css('width', progress + '%')
		}
	});

	//
	
});