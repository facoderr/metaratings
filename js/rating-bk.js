$(document).ready(function() {

	// Rating Event
	let overflow = $('html, body'),
		swipeItem = $('.js-rating-item');

	swipeItem.swipe({
		swipeStatus: function(event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection) {
			let $this = $(this);
			if (phase == 'start') {
				if (direction == 'left') {
					overflow.css('overflow', 'hidden');
				}
				if (direction == 'right') {
					overflow.css('overflow', 'hidden');
				}
			}
			if (phase == 'move') {
				if (direction == 'left') {
					overflow.css('overflow', 'hidden');
				}
				if (direction == 'right') {
					overflow.css('overflow', 'hidden');
				}
			}
			if (phase == 'end') {
				if (direction == 'left') {
					$this.addClass('is-swipe is-swiping');
					setTimeout(function () {
						overflow.css('overflow', 'hidden scroll');
						$this.removeClass('is-swiping');
					}, 300);
				}
				if (direction == 'right') {
					$this.addClass('is-swiping');
					$this.removeClass('is-swipe');
					setTimeout(function () {
						overflow.css('overflow', 'hidden scroll');
						$this.removeClass('is-swiping');
					}, 300);
				}
			}
		},
		allowPageScroll: 'none',
		preventDefaultEvents: false,
		triggerOnTouchEnd: false,
		threshold: 20
	});

	//
	
});