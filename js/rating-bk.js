$(document).ready(function () {

	// Rating Event
	let swipeItem = $('.js-rating-item');

	swipeItem.swipe({
		swipeStatus: function (event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection) {
			let $this = $(this);
			if (phase == 'end') {
				if (direction == 'left') {
					$this.addClass('is-swipe is-swiping');
					setTimeout(function () {
						$this.removeClass('is-swiping');
					}, 300);
				}
				if (direction == 'right') {
					$this.addClass('is-swiping');
					$this.removeClass('is-swipe');
					setTimeout(function () {
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