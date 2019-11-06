$(document).ready(function() {

	// Reward Event

	$('.js-select').click(function () {
		$(this).toggleClass('is-active');
		$(this).find('.select-menu').slideToggle(300);
	});
	$('.js-select li').click(function () {
		let selectValue = $(this).data('value');
		$(this).parents('.js-select').find('.select-field-text').text($(this).text());
		$(this).parents('.js-select').find('.select-input').val(selectValue);
	});
	$(document).bind('mouseup touchend', function(e) {
		if ($(e.target).closest('.js-select').length) return;
		$('.js-select').removeClass('is-active');
		$('.js-select').find('.select-menu').slideUp(300);
	});

	const range = $('.review-publish-range input');

	range.bind('input', (e) => {
		let rangeValue = e.target.value;
		
		if (rangeValue > 33 && rangeValue < 66) {
			range.parent().removeClass('is-success is-danger');
		} else if (rangeValue <= 33) {
			range.parent().removeClass('is-success');
			range.parent().addClass('is-danger');
		} else if (rangeValue >= 66) {
			range.parent().removeClass('is-danger');
			range.parent().addClass('is-success');
		}
	});

	//
	
});